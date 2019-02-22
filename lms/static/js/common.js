/**
 * sticky header
 */

$(function () {
    $(window).on("scroll resize", function () {
        var winTop = $(window).scrollTop();
        var headerHeight = $(".global-header .main-header").outerHeight();
        $(".global-header, .global-header .holder").css({"height": headerHeight + "px"});

        if (winTop > 0) {
            $(".global-header .holder").addClass("sticky-header sticky-header-bg");

        } else {
            $(".global-header .holder").removeClass("sticky-header-bg");
            setTimeout(function () {
                $(".global-header .holder").removeClass("sticky-header");
            }, 250);
        }
    });
});

/**
 * flip blocks
 */

!function (e) {
    "use strict";
    e.fn.fusionCalcFlipBoxesHeight = function () {
        var i, n, f = e(this), o = 0;
        f.find(".flip-box-front").css("min-height", ""), f.find(".flip-box-back").css("min-height", ""),
            f.find(".flip-box-front-inner").css("margin-top", ""), f.find(".flip-box-back-inner").css("margin-top", ""),
            f.css("min-height", ""), setTimeout(function () {
            f.find(".flip-box-front").outerHeight() > f.find(".flip-box-back").outerHeight() ? (n = f.find(".flip-box-front").height(),
                i = f.find(".flip-box-front").outerHeight(), o = (n - f.find(".flip-box-back-inner").outerHeight()) / 2,
                f.find(".flip-box-back").css("min-height", i), f.css("min-height", i),
                f.find(".flip-box-back-inner").css("margin-top", o)) : (n = f.find(".flip-box-back").height(),
                i = f.find(".flip-box-back").outerHeight(), o = (n - f.find(".flip-box-front-inner").outerHeight()) / 2,
                f.find(".flip-box-front").css("min-height", i), f.css("min-height", i), f.find(".flip-box-front-inner").css("margin-top", o))
        }, 100)
    }
}(jQuery), jQuery(window).load(function () {
    jQuery(".flip-box-wrapper").each(function () {
        jQuery(this).fusionCalcFlipBoxesHeight()
    }), jQuery(window).resize(function () {
        jQuery(".flip-box-wrapper").each(function () {
            jQuery(this).fusionCalcFlipBoxesHeight()
        })
    })
});

/**
 * slider in the "why us" block
 */

$('.why-us-slider').slick({
    dots: true,
    infinite: true,
    arrows: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    autoplay: true,
    autoplaySpeed: 6000
});

/**
 * go to slide
 */

$('.why-us-list-item[data-slide]').click(function () {
    var slideno = $(this).data('slide');
    $('.why-us-slider').slick('slickGoTo', slideno - 1);
});

/**
 * counter
 * @type {{counter_box_speed: string}}
 */

var fusionCountersBox = {"counter_box_speed": "1000"};

function getWaypointOffset(a) {
    var b, c, d = a.data("animationoffset");
    return void 0 === d && (d = "bottom-in-view"), "top-out-of-view" === d && (b = getAdminbarHeight(), c = "function" === getWaypointTopOffset ? getWaypointTopOffset() : 0, d = b + c), d
}

!function (d) {
    d.fn.countTo = function (f) {
        return f = d.extend({}, d.fn.countTo.defaults, f || {}), d(this).each(function () {
            var a = d.extend({}, f, {
                    from: parseFloat(d(this).attr("data-from") || f.from),
                    to: parseFloat(d(this).attr("data-to") || f.to),
                    speed: parseInt(d(this).attr("data-speed") || f.speed, 10),
                    refreshInterval: parseInt(d(this).attr("data-refresh-interval") || f.refreshInterval, 10),
                    decimals: parseInt(d(this).attr("data-decimals") || f.decimals, 10)
                }), t = Math.ceil(a.speed / a.refreshInterval), e = (a.to - a.from) / t, r = this, n = 0, o = a.from,
                l = setInterval(function () {
                    n++, s(o += e), "function" == typeof a.onUpdate && a.onUpdate.call(r, o);
                    t <= n && (clearInterval(l), o = a.to, "function" == typeof a.onComplete && a.onComplete.call(r, o))
                }, a.refreshInterval);

            function s(t) {
                var e = a.formatter.call(r, t, a);
                d(r).html(e)
            }

            s(o)
        })
    }, d.fn.countTo.defaults = {
        from: 0,
        to: 0,
        speed: 1e3,
        refreshInterval: 100,
        decimals: 0,
        formatter: function (t, e) {
            return t.toFixed(e.decimals)
        },
        onUpdate: null,
        onComplete: null
    }
}(jQuery);

!function (s) {
    "use strict";
    s.fn.$fusionBoxCounting = function () {
        var o = s(this).data("value"), n = s(this).data("direction"), t = s(this).data("delimiter"), e = 0, i = o,
            u = fusionCountersBox.counter_box_speed, r = Math.round(fusionCountersBox.counter_box_speed / 100);
        t || (t = ""), "down" === n && (e = o, i = 0), s(this).countTo({
            from: e,
            to: i,
            refreshInterval: r,
            speed: u,
            formatter: function (o, n) {
                return "-0" === (o = (o = o.toFixed(n.decimals)).replace(/\B(?=(\d{3})+(?!\d))/g, t)) && (o = 0), o
            }
        })
    }
}(jQuery), jQuery(window).load(function () {
    jQuery(".fusion-counter-box").not(".fusion-modal .fusion-counter-box").each(function () {
        var o = getWaypointOffset(jQuery(this));
        jQuery(this).waypoint(function () {
            jQuery(this).find(".display-counter").each(function () {
                jQuery(this).$fusionBoxCounting()
            })
        }, {triggerOnce: !0, offset: o})
    }), jQuery(".fusion-modal .fusion-counter-box").on("appear", function () {
        jQuery(this).find(".display-counter").each(function () {
            jQuery(this).$fusionBoxCounting()
        })
    })
});

!function (s) {
    "use strict";
    s.fn.$fusionBoxCounting = function () {
        var o = s(this).data("value"), n = s(this).data("direction"), t = s(this).data("delimiter"), e = 0, i = o,
            u = fusionCountersBox.counter_box_speed, r = Math.round(fusionCountersBox.counter_box_speed / 100);
        t || (t = ""), "down" === n && (e = o, i = 0), s(this).countTo({
            from: e,
            to: i,
            refreshInterval: r,
            speed: u,
            formatter: function (o, n) {
                return "-0" === (o = (o = o.toFixed(n.decimals)).replace(/\B(?=(\d{3})+(?!\d))/g, t)) && (o = 0), o
            }
        })
    }
}(jQuery), jQuery(window).load(function () {
    jQuery(".counter-box-wrap").each(function () {
        var o = getWaypointOffset(jQuery(this));
        jQuery(this).waypoint(function () {
            jQuery(this).find(".display-counter").each(function () {
                jQuery(this).$fusionBoxCounting()
            })
        }, {triggerOnce: !0, offset: o})
    });
});


/**
 * testimonial slider
 */

$('.testimonial-block-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 500,
    arrows: false,
    dots: false,
    adaptiveHeight: true,
    draggable: false,
    swipe: false,
    swipeToSlide: false,
    touchMove: false,
    accessibility: false,
    infinite: true,
    fade: true,
    cssEase: 'linear'
});

/**
 * scroll to top btn
 */

$(document).ready(function() {
    var scrollTop = $("#toTop");

    showToTopButton();
    $(window).scroll(showToTopButton);

    function showToTopButton () {
        var topPos = $(this).scrollTop();
        if (topPos > 100) {
            $(scrollTop).fadeIn(500);
        } else {
            $(scrollTop).fadeOut(500);
        }
    }

    $(scrollTop).click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 800);
        return false;

    });
});
