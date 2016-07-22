(function() {
    'use strict';

    angular
        .module('jhipsterProjectApp')
        .factory('UserService', UserService);

    UserService.$inject = ['$mdDialog', '$resource', '$rootScope'];

    function UserService ($mdDialog, $resource, $rootScope) {
        
        var User = $resource('/api/users/:login', {}, {
            update: { method: 'PUT' }
        });
        //do rejestrowania musi byc inny resource
        var UserRegister = $resource('/api/register');

        return {
            openNewUserDialog: _openNewUserDialog,
            openUpdateUserDialog: _openUpdateUserDialog,
            getAllUsers: _getAllUsers,
            registerUser: _registerUser,
            updateUser: _updateUser
        }

        function _openNewUserDialog(event) {
            $rootScope.selectedUser = null;
            $mdDialog.show({
                templateUrl: 'app/components/user/user.html',
                parent: angular.element(document.body),
                controller: 'UserController',
                controllerAs: 'vm',
                targetEvent: event
            });
        }

        function _openUpdateUserDialog(event, login) {
            $rootScope.selectedUser = _getUser(login);

            $mdDialog.show({
                templateUrl: 'app/components/user/user.html',
                parent: angular.element(document.body),
                controller: 'UserController',
                controllerAs: 'vm',
                targetEvent: event
            });
        }

        function _getAllUsers() {
            return User.query();
        }

        function _getUser(login) {
            return User.get({login: login});
        }

        function _registerUser(user) {
            var newUser = new UserRegister(user);
            return newUser.$save();
        }

        function _updateUser(user) {
            return user.$update();
        }
    }
})();
