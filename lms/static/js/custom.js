$(document).ready(function() {

    var headerTop = $('.header-top');
    var headerNav = $('.header-nav');
    var headerNavHeight = $('.header-nav').innerHeight();
    var origOffsetY = headerNav.offset().top;

    function fixNavbar() {
        if ($(window).scrollTop() >= origOffsetY) {
            headerNav.addClass('navbar-fixed-top');
            $(headerTop).css('margin-bottom', headerNavHeight + 'px');
        } else {
            headerNav.removeClass('navbar-fixed-top');
            $(headerTop).css('margin-bottom', 0);
        }
    }

    $(window).on('scroll', function () {
        fixNavbar();
    });

    /// Filter using isotop ///

    var $grid = $('.courses-listing').isotope({
        // options
        itemSelector: '.courses-listing-item',
        layoutMode: 'fitRows',
        originLeft: false
    });

    // bind filter button click
    $('.filters-button-group').on( 'click', 'button', function() {
      var filterValue = $( this ).attr('data-filter');
      $grid.isotope({ filter: filterValue });
    });
    // change is-checked class on buttons
    $('.button-group').each( function( i, buttonGroup ) {
      var $buttonGroup = $( buttonGroup );
      $buttonGroup.on( 'click', 'button', function() {
        $buttonGroup.find('.active').removeClass('active');
        $( this ).addClass('active');
      });
    });

});

var THEMEMASCOT = {}; 

(function($) {
    "use strict";

    var $document = $(document);
    var $document_body = $(document.body);
    var $window = $(window);
    var $body = $('body');

    THEMEMASCOT.header = {
        init: function() {

            var t = setTimeout(function() {
                THEMEMASCOT.header.TM_scroolToTopOnClick();
                THEMEMASCOT.header.TM_scrolltoTarget();
            }, 0);

        },

        /* ---------------------------------------------------------------------- */
        /* ------------------------------- scrollToTop  ------------------------- */
        /* ---------------------------------------------------------------------- */
        TM_scroolToTop: function() {
            if ($window.scrollTop() > 600) {
                $('.scrollToTop').fadeIn();
            } else {
                $('.scrollToTop').fadeOut();
            }
        },

        TM_scroolToTopOnClick: function() {
            $document_body.on('click', '.scrollToTop', function(e) {
                $('html, body').animate({
                    scrollTop: 0
                }, 800);
                return false;
            });
        },

        /* ---------------------------------------------------------------------- */
        /* ------------------- on click scrool to target with smoothness -------- */
        /* ---------------------------------------------------------------------- */
        TM_scrolltoTarget: function() {
            //jQuery for page scrolling feature - requires jQuery Easing plugin
            $('.smooth-scroll-to-target, .fullscreen-onepage-nav a').on('click', function(e) {
                e.preventDefault();

                var $anchor = $(this);
                
                var $hearder_top = $('.header .header-nav');
                var hearder_top_offset = 0;
                if ($hearder_top[0]){
                    hearder_top_offset = $hearder_top.outerHeight(true);
                } else {
                    hearder_top_offset = 0;
                }

                //for vertical nav, offset 0
                if ($body.hasClass("vertical-nav")){
                    hearder_top_offset = 0;
                }

                var top = $($anchor.attr('href')).offset().top - hearder_top_offset;
                $('html, body').stop().animate({
                    scrollTop: top
                }, 1500, 'easeInOutExpo');

            });
        }
    };

    THEMEMASCOT.widget = {
        init: function() {
            var t = setTimeout(function() {
                THEMEMASCOT.widget.TM_funfact();
    
            }, 0);
        },
        TM_funfact: function() {
            var $animate_number = $('.animate-number');
            if( $animate_number.length > 0 ) {
                $animate_number.appear();
                $document_body.on('appear', '.animate-number', function() {
                    $animate_number.each(function() {
                        var current_item = $(this);
                        if (!current_item.hasClass('appeared')) {
                            current_item.animateNumbers(current_item.attr("data-value"), true, parseInt(current_item.attr("data-animation-duration"), 10)).addClass('appeared');
                        }
                    });
                });
            }
        }
    },

    //document ready
    THEMEMASCOT.documentOnReady = {
        init: function() {
            THEMEMASCOT.header.init();
            THEMEMASCOT.widget.init();
            THEMEMASCOT.windowOnscroll.init();
        }
    };

    //window on scroll
    THEMEMASCOT.windowOnscroll = {
        init: function() {
            $window.on( 'scroll', function(){
                THEMEMASCOT.header.TM_scroolToTop();
            });
        }
    };

    $document.ready(
        THEMEMASCOT.documentOnReady.init
    );

})(jQuery);
