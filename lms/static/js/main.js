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
});
