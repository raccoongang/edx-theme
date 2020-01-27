'use strict';

$(function () {
    var fs = document.getElementById('fullscreen');
    var main = document.getElementById('course-content');

    function toggleFullScreen() {
        var fullscreen = document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement;
        if (!fullscreen) {
            if (main.msRequestFullscreen) {
                main.msRequestFullscreen();
            }
            if (main.webkitRequestFullscreen) {
                main.webkitRequestFullscreen();
            }
            if (main.mozRequestFullScreen) {
                main.mozRequestFullScreen();
            }
            cahngeXlink('#ico-fs-shrink');
        } else {
            if (document.msExitFullscreen) {
                document.msExitFullscreen();
            }
            if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
            }
            if (document.webkitExitFullscreen) {
                document.webkitExitFullscreen();
            }
            cahngeXlink('#ico-fs-expand');
        }
    }

    var cahngeXlink = function cahngeXlink(val) {
        document.querySelector('.fullscreen-button use').setAttributeNS('http://www.w3.org/1999/xlink', 'href', val);
    };

    if (fs) {
        fs.addEventListener('click', toggleFullScreen);
        document.addEventListener("fullscreenchange", onFullScreenChange, false);
        document.addEventListener("webkitfullscreenchange", onFullScreenChange, false);
        document.addEventListener("mozfullscreenchange", onFullScreenChange, false);
        document.addEventListener('MSFullscreenChange', onFullScreenChange, false);

        function onFullScreenChange() {
            var fullscreen = document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement;

            if (!fullscreen) {
                cahngeXlink('#ico-fs-expand');
            }
        }
    }
})
