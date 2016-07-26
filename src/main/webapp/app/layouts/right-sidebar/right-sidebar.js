(function() {
    'use strict';

    angular
        .module('jhipsterProjectApp')
        .controller('RightSidebarController', RightSidebarController);

    RightSidebarController.$inject = ['Principal', '$mdSidenav', '$resource', '$mdDialog', 'UserService'];

    function RightSidebarController (Principal, $mdSidenav, $resource, $mdDialog, UserService) {
        var view = this;

        view.isAuthenticated = Principal.isAuthenticated;

        view.users = UserService.getAllUsers();
        console.log(view.users);

        view.menuClose = function() {
            $mdSidenav('sidebar-right').close();
        }

        view.openRegisterDialog = function(event) {
            UserService.openNewUserDialog(event);
        }

        view.openUpdateDialog = function(event, login) {
            UserService.openUpdateUserDialog(event, login);
        }





    }
})();
