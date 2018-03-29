'use strict';

(function () {
    var input = document.querySelector('#browseBtn-bulk-csv');
    var label = document.querySelector('#bulk-exception-upload');
    var labelVal = label.innerHTML;

    input.addEventListener('change', function(e){
        var fileName = e.target.value.split( '\\' ).pop();

        if(fileName)
            label.innerHTML = fileName;
        else
            label.innerHTML = labelVal;
    });

}());
