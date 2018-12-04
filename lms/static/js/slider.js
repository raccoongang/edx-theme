$(window).load(function () {
    $('.main-slider').slick({
        dots: true,
        arrows: false,
        infinite: true,
        centerMode: true,
        variableWidth: true,
        draggable: false
        // slidesToShow: 3,
        // slidesToScroll: 1
    });
});

// $(window).on('resize orientationchange', function () {
//     $('section.home > .slider').slick('resize');
// });
