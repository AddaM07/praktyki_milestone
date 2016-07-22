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



        // MY EDIT
        view.toggleMenu = function(isMenuOpen) {
            view.isMenuOpen = isMenuOpen;
            // $mdSidenav('sidebar-left').toggle();
            var width = (view.isMenuOpen) ? '250px' : '64px';
            if(!view.isMenuOpen) {
                dropdownCloseAll();
            }
            $('.sidebar').css('width', width);
        }

        view.dropdownToggle = function(event) {
            var jQueryElement = angular.element(event.currentTarget);
            //bo jqueryElement to tylko przycisk wygrenerowany przez MD
            var currentElement = jQueryElement.parent();
            var icon = currentElement.find('.dropdown-icon').toggleClass('open');
            currentElement.next('ul').slideToggle(200);
        }

        function dropdownCloseAll() {
            $('.dropdown-list').css('display', 'none');
            $('.dropdown-icon').removeClass('open');
        }

        view.changeState = function(state) {
            $state.go(state);
        }

        // funkcja uruchamiana na starcie(ng-init), po scrollowaniu zawartosci przesuwa sidebarHeader oraz sidebarContent w gore(tak by zostal tylko sidebarContent)
        view.pageScrolled = function() {
            var contentWrapper = $('.main-block');
            var sidebarHeader = $('.sidebar md-toolbar');
            var sidebarContent = $('.sidebar md-content');
            contentWrapper.scroll(function(event) {
                var positionX = contentWrapper.scrollTop();
                    sidebarHeader.css('top', -positionX + 'px');
                    var contentMove = (positionX <= sidebarHeader.outerHeight()) ? positionX : sidebarHeader.outerHeight();
                    sidebarContent.css('top', -contentMove + 'px');
            });
        }









    }
})();
