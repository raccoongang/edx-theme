$( document ).ready(function() {

    (function () {
        var input = $('#browseBtn-bulk-csv');
        var label = $('#bulk-exception-upload');

        input.on('change', function(e){
            var fileName = e.target.value.split( '\\' ).pop();

            if (fileName) {
                label.html(fileName);
            } else {
                label.html('');
            }
        });

    }());

});
