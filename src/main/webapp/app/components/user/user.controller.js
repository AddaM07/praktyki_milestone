(function() {
    'use strict';

    angular
        .module('jhipsterProjectApp')
        .controller('UserController', UserController);

    UserController.$inject = ['$mdDialog', '$rootScope', 'UserService'];

    function UserController ($mdDialog, $rootScope, UserService) {
        var view = this;
        view.authorities = ['ROLE_USER', 'ROLE_ADMIN'];

        view.User = $rootScope.selectedUser;
        view.isNewUser = ($rootScope.selectedUser == null) ? true : false;

        view.closeRegisterDialog = function() {
            $mdDialog.cancel();
        }

        view.registerUser = function(user) {
            view.doNotMatch = null;
            view.error = null;
            view.errorUserExists = null;
            view.errorEmailExists = null;

            if(user.password !== view.confirmPassword) {
                view.doNotMatch = 'ERROR';
                return;
            }

            UserService.registerUser(user)
            .then(function() {
                view.success = 'OK';
            })
            .catch(function(response) {
                view.success = null;
                if(response.status === 400 && response.data === 'login already in use') {
                    view.errorUserExists = 'ERROR';
                } else if (response.status === 400 && response.data === 'e-mail address already in use') {
                        view.errorEmailExists = 'ERROR';
                    } else {
                        view.error = 'ERROR';
                    }
            })
        }

        view.updateUser = function(user) {
            view.error = null;
            view.success = null;

            UserService.updateUser(user)
            .then(function() {
                view.success = 'OK';
            })
            .catch(function(response) {
                view.error = 'ERROR';
                $('md-dialog-content').scrollTop(0);
            });
;        }
    }
})();
