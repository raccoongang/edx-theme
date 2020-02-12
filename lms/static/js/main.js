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

});
