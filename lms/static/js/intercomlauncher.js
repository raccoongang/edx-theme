jQuery(window).load(function() {
    var userElem = document.querySelector('.header-account__username');
    window.username = userElem.innerHTML;
    window.displayname = window.username;

    var courseName = document.querySelector('header.header-global h2');
    window.courseName = courseName.innerHTML;

    if (TUTORED_STUDENTS[window.username]) {
        // Welcome tutored student
        document.getElementById('displayname').innerHTML = displayname;
    }

    // Enable the combobox widget
    populateLessons();
    jQuery( "#combobox" ).combobox();
    jQuery( "#toggle" ).on( "click", function() {
        jQuery( "#combobox" ).toggle();
    });

    // Hide the 'Scroll to top' button
    jQuery('#scrolltop').hide();
});


function launchIntercom(){
    Intercom('trackEvent', 'question', {
        user_id: TUTORED_STUDENTS[window.username].id,
        email: TUTORED_STUDENTS[window.username].email,
        module: window.courseName,
        lesson: document.getElementById('selectedlesson').value,
        type: document.querySelector('input[name="question_type"]:checked').value,
        urgency: document.querySelector('input[name="urgency"]:checked').value,
        github: document.getElementById('githubrepo').value,
    });

    Intercom('boot',{
        app_id: INTERCOM_APP_ID,
        id: TUTORED_STUDENTS[window.username].id,
        email: TUTORED_STUDENTS[window.username].email,
        username: window.username,
        name: window.displayname,
        module: window.courseName,
        lesson: document.getElementById('selectedlesson').value,
        type: document.querySelector('input[name="question_type"]:checked').value,
        urgency: document.querySelector('input[name="urgency"]:checked').value,
        githubrepo: document.getElementById('githubrepo').value,
        custom_launcher_selector: '#launch-intercom',
    });

    // Close the intercom widget after 12 hours
    setTimeout(function(){
        Intercom('shutdown');
    },(12*60*60*1000));
}


function populateLessons() {
    LESSONS[courseName].forEach(function(lessonName) {
        jQuery('#combobox').append('<option name="lesson" value="' + lessonName + '" class="lesson">' + lessonName + '</option>');
    });
}