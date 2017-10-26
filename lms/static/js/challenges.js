jQuery(window).load(function(){
    $(document).on("click", ".button-next", function() {
       toggleChallenge();
    });
    
    $(document).on("click", ".button-previous", function() {
       toggleChallenge();
    });
    
    $(document).on("click", ".seq_video", function() {
       toggleChallenge();
    });
    
    toggleChallenge();
    
    function toggleChallenge() {
        $(".challenge-input").on("click",function(){
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
    }
   
});
