$(document).ready(function () {
    $('.slider-gallery').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        focusOnSelect: true,
        centerMode: true,
        centerPadding: '150px',
        dots: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    centerPadding: '0px'
                }
            }
        ]
    });
});