$(function () {
    let fs = document.getElementById('fullscreen');
    let main = document.getElementById('course-content');
    function toggleFullScreen() {
        let fullscreen = document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement;
        if (!fullscreen) {
            fs.classList.remove('fa-arrows-alt');
            fs.classList.add('fa-compress');
            if (main.msRequestFullscreen) {main.msRequestFullscreen()}
            if (main.webkitRequestFullscreen) {main.webkitRequestFullscreen()}
            if (main.mozRequestFullScreen) {main.mozRequestFullScreen()}
        } else {
            fs.classList.remove('fa-compress');
            fs.classList.add('fa-arrows-alt');
            if(document.msExitFullscreen) {document.msExitFullscreen()}
            if(document.mozCancelFullScreen) {document.mozCancelFullScreen()}
            if(document.webkitExitFullscreen) {document.webkitExitFullscreen()}
        }
    }

    fs.addEventListener("click", function(e) {
        toggleFullScreen();
    }, false);
})
