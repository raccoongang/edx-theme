var THEMEMASCOT = {};

(function($) {
    "use strict";
    var $document = $(document);
    var $body = $('body');

    THEMEMASCOT.header = {
        init: function() {
            var t = setTimeout(function() {
                THEMEMASCOT.header.TM_scrolltoTarget();
            }, 0);
        },
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
        },
    };

    THEMEMASCOT.documentOnReady = {
        init: function() {
            THEMEMASCOT.header.init();
        }
    };

    $document.ready(
        THEMEMASCOT.documentOnReady.init
    );

})(jQuery);
