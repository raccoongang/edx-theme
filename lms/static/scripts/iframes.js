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

$(document).ready(function(){

    $(".challenge-input").click(function(){
     var $currentRadio = $(this);
     var $hint = $currentRadio.parent().parent().parent().next().find(".challenge-content#hint");
     var $challenge = $currentRadio.parent().parent().parent().next().find(".challenge-content#challenge");

        if ($currentRadio.is("#hint-radio")) {
            $hint.show();
            $challenge.hide();
        }
        
        if ($currentRadio.is("#challenge-radio")) {
            $hint.hide();
            $challenge.show();
        }
    });
 
});