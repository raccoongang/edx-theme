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

});
