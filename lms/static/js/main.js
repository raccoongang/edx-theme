$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        dots: true,
        autoplay: true,
        center: true,
        loop: true,
        margin: 15,
        items: 2,
        responsive: {
            0: {
                items: 1
            },
            901: {
                items: 2
            }
        }
    });
    // course page accordion
    $('.course-program-list__head').on('click', function() {
        var $answer = $(this).next();

        $('.course-program-list__content').not($answer).slideUp(400).parent().removeClass('is-open');
        $answer.slideToggle(400).parent().toggleClass('is-open');
    });

    // course page about anchor
    $(".js-anchor").on("click", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top - 120;
        $('body,html').animate({scrollTop: top}, 700);
    });

    // popup init
    $('#aside-popup').popup({
        transition: 'all 0.3s',
        scrolllock: true
    });
    // open/close course program on the info page
    $('.week-structure__name').on('click', function() {
        var self = $(this);

        self.toggleClass('is-active');
        self.parent().find('.week-structure__box').slideToggle();
    });
    // show/hide course program on the info page
    $('.js-course-program').on('click', function() {
        $('.course-wrapper').toggleClass('panel-is-hide');
    });

    // referral btn on the info page
    $('.js-referral-btn').on('click', function() {
        var self = $(this);
        var value = self.data('clipboard-text'); 
        var $temp = $("<input>");

        self.addClass('is-copied');
        setTimeout(function() {
            self.removeClass('is-copied');
        }, 3000);
        // copy to clipbord
        $("body").append($temp);
        $temp.val(value).select();
        document.execCommand("copy");
        $temp.remove();
    });

    // mobile menu tabs
    $('.js-tabs-mobile-btn').on('click', function() {
        $(this).toggleClass('is-open');
        $('#course__tabs').toggleClass('is-visible');
    });

    $(document).on('click touchstart', function(event) {
        if (!$(event.target).closest('.course-material').length) {
            $('#course__tabs').removeClass('is-visible');
            $('.js-tabs-mobile-btn').removeClass('is-open');
        }
    });
    // set dropdown select always on under position
   (function($) {

        var Defaults = $.fn.select2.amd.require('select2/defaults');
    
    $.extend(Defaults.defaults, {
        dropdownPosition: 'auto'
    });
    
        var AttachBody = $.fn.select2.amd.require('select2/dropdown/attachBody');
    
    var _positionDropdown = AttachBody.prototype._positionDropdown;
    
    AttachBody.prototype._positionDropdown = function() {
    
        var $window = $(window);
    
            var isCurrentlyAbove = this.$dropdown.hasClass('select2-dropdown--above');
            var isCurrentlyBelow = this.$dropdown.hasClass('select2-dropdown--below');
    
            var newDirection = null;
    
            var offset = this.$container.offset();
    
            offset.bottom = offset.top + this.$container.outerHeight(false);
            
            var container = {
                height: this.$container.outerHeight(false)
            };
        
        container.top = offset.top;
        container.bottom = offset.top + container.height;

        var dropdown = {
        height: this.$dropdown.outerHeight(false)
        };

        var viewport = {
        top: $window.scrollTop(),
        bottom: $window.scrollTop() + $window.height()
        };

        var enoughRoomAbove = viewport.top < (offset.top - dropdown.height);
        var enoughRoomBelow = viewport.bottom > (offset.bottom + dropdown.height);
        
        var css = {
        left: offset.left,
        top: container.bottom
        };

        // Determine what the parent element is to use for calciulating the offset
        var $offsetParent = this.$dropdownParent;

        // For statically positoned elements, we need to get the element
        // that is determining the offset
        if ($offsetParent.css('position') === 'static') {
        $offsetParent = $offsetParent.offsetParent();
        }

        var parentOffset = $offsetParent.offset();

        css.top -= parentOffset.top
        css.left -= parentOffset.left;
        
        var dropdownPositionOption = this.options.get('dropdownPosition');
        
            if (dropdownPositionOption === 'above' || dropdownPositionOption === 'below') {
        
                newDirection = dropdownPositionOption;
        
        } else {
                
            if (!isCurrentlyAbove && !isCurrentlyBelow) {
                    newDirection = 'below';
                }

                if (!enoughRoomBelow && enoughRoomAbove && !isCurrentlyAbove) {
                newDirection = 'above';
                } else if (!enoughRoomAbove && enoughRoomBelow && isCurrentlyAbove) {
                newDirection = 'below';
                }
        
        }

        if (newDirection == 'above' ||
            (isCurrentlyAbove && newDirection !== 'below')) {
        css.top = container.top - parentOffset.top - dropdown.height;
        }

        if (newDirection != null) {
        this.$dropdown
            .removeClass('select2-dropdown--below select2-dropdown--above')
            .addClass('select2-dropdown--' + newDirection);
        this.$container
            .removeClass('select2-container--below select2-container--above')
            .addClass('select2-container--' + newDirection);
        }

        this.$dropdownContainer.css(css);
    
    };
    
    })(window.jQuery);

    // more/less on the news page
    $(".course-news__item").each(function(i, element) {
        var self = $(this);
        var $content = self.find($(".course-news__text"));
        var $link = self.find($(".course-news__actions button"));
        var max_length = 100;
        var short_content = $content.html().substring(0, max_length);
        var long_content = $content.html().substring(0);
        var _openClass = 'is-open';

        if ( $content.text().length > max_length ) {
            self.removeClass('is-visible');
            $content.html(short_content);
        } else {
            self.addClass('is-visible');
        }

        $link.on('click', function() {
            self.toggleClass(_openClass);
            self.hasClass(_openClass) ? $content.html(long_content) : $content.html(short_content);
        });
    });
    
    // index partners slider
    $('.js-course-partners-list').slick({
        slidesPerRow: 5,
        rows: 3,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 5000,
        responsive: [
            {
                breakpoint: 1080,
                settings: {
                    slidesPerRow: 4
                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesPerRow: 3
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesPerRow: 2
                }
            },
            {
                breakpoint: 414,
                settings: {
                    slidesPerRow: 1
                }
            }
        ]
    });
});

