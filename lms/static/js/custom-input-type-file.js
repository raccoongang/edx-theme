'use strict';

(function () {
    var input = document.querySelector('#browseBtn-bulk-csv');
    var label = document.querySelector('#bulk-exception-upload');
    var labelVal;

    input.addEventListener('change', function(e){
        var fileName = e.target.value.split( '\\' ).pop();

        if(fileName)
            label.innerHTML = fileName;
    });

}());
