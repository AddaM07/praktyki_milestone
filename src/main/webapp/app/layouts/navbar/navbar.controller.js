(function() {
    'use strict';

    angular
        .module('jhipsterProjectApp')
        .controller('NavbarController', NavbarController);

    NavbarController.$inject = ['$state', 'Auth', 'Principal', 'ProfileService', 'LoginService', '$mdSidenav'];

    function NavbarController ($state, Auth, Principal, ProfileService, LoginService, $mdSidenav) {
        var vm = this;

        vm.navbarClass = "navbar-closed";

        vm.isNavbarCollapsed = true;
        vm.isAuthenticated = Principal.isAuthenticated;

        ProfileService.getProfileInfo().then(function(response) {
            vm.inProduction = response.inProduction;
            vm.swaggerDisabled = response.swaggerDisabled;
        });

        vm.login = login;
        vm.logout = logout;
        vm.toggleNavbar = toggleNavbar;
        vm.collapseNavbar = collapseNavbar;
        vm.$state = $state;

        function login() {
            collapseNavbar();
            LoginService.open();
        }

        function logout() {
            collapseNavbar();
            Auth.logout();
            $state.go('home');
        }

        function toggleNavbar() {
            vm.isNavbarCollapsed = !vm.isNavbarCollapsed;
        }

        function collapseNavbar() {
            vm.isNavbarCollapsed = true;
        }

        vm.isSearchOpen = false;

        vm.searchFocus = function() {
            var input = $('.toolbar-main-box-right-search-form_group input');
            var box = input.parent('.toolbar-main-box-right-search-form_group');
            var icon = $('.toolbar-main-box-right-search-form_group i');

            
            input.toggleClass('focus');
            icon.toggleClass('focus');
            box.toggleClass('focus');
        }

        vm.searchBlur = function() {
            var input = $('.toolbar-main-box-right-search-form_group input');
            var box = input.parent('.toolbar-main-box-right-search-form_group');
            var icon = $('.toolbar-main-box-right-search-form_group i');

            input.toggleClass('focus');
            icon.toggleClass('focus');
            box.toggleClass('focus');
        }

        vm.rightMenuOpen = function() {
            $mdSidenav('sidebar-right').open();
        }

        vm.notificationsOpen = function() {
            // tabindex potrzebne by można było dać focus na div
            $('.notifications_dropdown_box').css('display', 'block').attr('tabindex', -1).focus();
        }

        vm.notificationsClose = function() {
            $('.notifications_dropdown_box').css('display', 'none');
        }

        vm.languagesOpen = function() {
            $('.languages_dropdown_box').css('display', 'block').attr('tabindex', -1).focus();
        }

        vm.languagesClose = function() {
            $('.languages_dropdown_box').css('display', 'none');
        }

    }
})();
