(function() {
    'use strict';

    angular
        .module('jhipsterProjectApp')
        .controller('SidebarController', SidebarController);

    SidebarController.$inject = ['$state', 'Auth', 'Principal', 'ProfileService', 'LoginService', '$mdSidenav'];

    function SidebarController ($state, Auth, Principal, ProfileService, LoginService, $mdSidenav) {
        var view = this;


        view.sidebarClass = "sidebar-closed";

        view.isSidebarCollapsed = true;
        view.isAuthenticated = Principal.isAuthenticated;


        ProfileService.getProfileInfo().then(function(response) {
            view.inProduction = response.inProduction;
            view.swaggerDisabled = response.swaggerDisabled;
        });

        view.login = login;
        view.logout = logout;
        view.toggleSidebar = toggleSidebar;
        view.collapseSidebar = collapseSidebar;
        view.$state = $state;

        function login() {
            collapseSidebar();
            LoginService.open();
        }

        function logout() {
            // collapseSidebar();
            Auth.logout();
            $state.go('login');
        }

        function toggleSidebar() {
            view.isSidebarCollapsed = !view.isSCollapsed;
        }

        function collapseSidebar() {
            view.isSidebarCollapsed = true;
        }



        view.dropdownToggle = function(event) {
            var jQueryElement = angular.element(event.currentTarget);
            var menuItem = jQueryElement.parent();
            var icon = menuItem.find('.sidebar-menu-item-dropdown_icon');
            var dropdown = menuItem.find('.sidebar-menu-item-dropdown');

            menuItem.toggleClass('open');
            icon.toggleClass('open');
            dropdown.toggleClass('open');
        }

        function dropdownCloseAll() {
            $('.dropdown-list').css('display', 'none');
            $('.dropdown-icon').removeClass('open');
        }

        view.changeState = function(state) {
            $state.go(state);
        }









    }
})();
