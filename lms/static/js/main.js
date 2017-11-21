$(document).ready(function () {
    $('.slider-gallery').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        focusOnSelect: true,
        centerMode: true,
        centerPadding: '26%',
        dots: true,
        arrows: false,
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    centerPadding: '20%'
                }
            },
            {
                breakpoint: 768,
                settings: {
                    centerPadding: '0px'
                }
            }
        ]
    });
});