$(window).load(function () {
    $('section.home > .slider').slick({
        dots: true,
        infinite: true,
        speed: 700,
        fade: true,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 7000
    });
});

$(window).on('resize orientationchange', function () {
    $('section.home > .slider').slick('resize');
    $('.company-box__slick').slick('resize');
    $('.schools-box__slick').slick('resize');
});

$(window).load(function () {
    $('.company-box__slick').slick({
        arrows: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
        {
            breakpoint: 960,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 760,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        ]
    });
    $('.schools-box__slick').slick({
        arrows: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
        {
            breakpoint: 960,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 760,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        ]
    });
    $('.partners__slick').slick({
        arrows: true,
        infinite: true,
        variableWidth: true
    });
});