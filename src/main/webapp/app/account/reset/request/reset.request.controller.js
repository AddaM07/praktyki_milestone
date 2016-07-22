(function() {
    'use strict';

    angular
        .module('jhipsterProjectApp')
        .controller('RequestResetController', RequestResetController);

    RequestResetController.$inject = ['$timeout', 'Auth'];

    function RequestResetController ($timeout, Auth) {
        var view = this;

        view.error = null;
        view.errorEmailNotExists = null;
        view.requestReset = requestReset;
        view.resetAccount = {};
        view.success = null;

        // $timeout(function (){angular.element('#email').focus();});

        function requestReset () {

            view.error = null;
            view.errorEmailNotExists = null;

            Auth.resetPasswordInit(view.resetAccount.email).then(function () {
                view.success = 'OK';
            }).catch(function (response) {
                view.success = null;
                if (response.status === 400 && response.data === 'e-mail address not registered') {
                    view.errorEmailNotExists = 'ERROR';
                } else {
                    view.error = 'ERROR';
                }
            });
        }
    }
})();
