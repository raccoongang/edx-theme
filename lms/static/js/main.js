$(document).ready(function () {
    $('.slider-gallery').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        focusOnSelect: true,
        centerMode: true,
        centerPadding: '20%',
        dots: true,
        arrows: false,
        adaptiveHeight: true,
        infinite: true,
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