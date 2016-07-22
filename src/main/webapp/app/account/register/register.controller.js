(function() {
    'use strict';

    angular
        .module('jhipsterProjectApp')
        .controller('RegisterController', RegisterController);


    RegisterController.$inject = ['$translate', '$timeout', 'Auth', 'LoginService'];

    function RegisterController ($translate, $timeout, Auth, LoginService) {
        var view = this;

        view.doNotMatch = null;
        view.error = null;
        view.errorUserExists = null;
        view.login = LoginService.open;
        view.register = register;
        view.registerAccount = {};
        view.success = null;

        // $timeout(function (){angular.element('#login').focus();});

        function register () {
            if (view.registerAccount.password !== view.confirmPassword) {
                view.doNotMatch = 'ERROR';
            } else {
                view.registerAccount.langKey = $translate.use();
                view.doNotMatch = null;
                view.error = null;
                view.errorUserExists = null;
                view.errorEmailExists = null;

                Auth.createAccount(view.registerAccount).then(function () {
                    view.success = 'OK';
                }).catch(function (response) {
                    view.success = null;
                    if (response.status === 400 && response.data === 'login already in use') {
                        view.errorUserExists = 'ERROR';
                    } else if (response.status === 400 && response.data === 'e-mail address already in use') {
                        view.errorEmailExists = 'ERROR';
                    } else {
                        view.error = 'ERROR';
                    }
                });
            }
        }
    }
})();
