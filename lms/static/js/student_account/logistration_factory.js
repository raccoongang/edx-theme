(function(define) {
    'use strict';
    define([
        'jquery',
        'js/student_account/views/AccessView'
    ],
        function($, AccessView) {
            return function(options) {
                var $logistrationElement = $('#login-and-registration-container');
                var accessView = new AccessView(_.extend(options, {el: $logistrationElement}));

                accessView.listenTo(accessView.subview.register, 'auth-complete', (function () {
                    fbq('track', 'CompleteRegistration');
                }));
            };
        }
    );
}).call(this, define || RequireJS.define);
