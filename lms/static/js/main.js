$(document).ready(function () {
    // if ($('.slider-gallery').length > 0) {
    //     $('.slider-gallery').slick({
    //         slidesToShow: 1,
    //         slidesToScroll: 1,
    //         focusOnSelect: true,
    //         centerMode: true,
    //         centerPadding: '20%',
    //         dots: true,
    //         arrows: false,
    //         adaptiveHeight: true,
    //         infinite: true,
    //         autoplay: false,
    //         autoplaySpeed: 5000,
    //         responsive: [
    //             {
    //                 breakpoint: 1400,
    //                 settings: {
    //                     centerPadding: '20%'
    //                 }
    //             },
    //             {
    //                 breakpoint: 768,
    //                 settings: {
    //                     centerPadding: '0px'
    //                 }
    //             }
    //         ]
    //     });
    // }
    // if ($('.slider-gallery-about').length > 0) {
    //     $('.slider-gallery-about').slick({
    //         slidesToShow: 1,
    //         slidesToScroll: 1,
    //         focusOnSelect: true,
    //         centerMode: true,
    //         centerPadding: '20%',
    //         dots: true,
    //         arrows: false,
    //         adaptiveHeight: true,
    //         infinite: true,
    //         autoplay: true,
    //         autoplaySpeed: 5000,
    //         responsive: [
    //             {
    //                 breakpoint: 1400,
    //                 settings: {
    //                     centerPadding: '20%'
    //                 }
    //             },
    //             {
    //                 breakpoint: 920,
    //                 settings: {
    //                     centerPadding: '0px'
    //                 }
    //             }
    //         ]
    //     });
    // }
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
});