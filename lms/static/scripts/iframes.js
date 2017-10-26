function toggleFullScreen(iframeId) {
    var iframeElement = document.getElementById(iframeId);
    if (!document.mozFullScreen && !document.webkitFullScreen) {
        if (iframeElement.mozRequestFullScreen) {
            iframeElement.mozRequestFullScreen();
        } else {
            iframeElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
        }
    } else {
        if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else {
            document.webkitCancelFullScreen();
        }
    }
}

function startTour() {
    var tour = introJs()
    tour.setOption('tooltipPosition', 'auto');
    tour.setOption('positionPrecedence', ['left', 'right', 'bottom', 'top'])
    tour.start()
}


