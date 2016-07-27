(function() {
    'use strict';

    angular
        .module('jhipsterProjectApp')
        .controller('SidebarController', SidebarController);

    SidebarController.$inject = ['$state', 'Auth', 'Principal', 'ProfileService', 'LoginService', '$mdSidenav'];

    function SidebarController ($state, Auth, Principal, ProfileService, LoginService, $mdSidenav) {
        var view = this;

        view.logout = logout;
        view.$state = $state;
        view.account = null;
        view.isAuthenticated = null;
        view.role = null;



        getAccount();

        function getAccount() {
            Principal.identity().then(function(account) {
                view.account = account;
                view.isAuthenticated = Principal.isAuthenticated;
                var findAdmin = view.account.authorities.indexOf('ROLE_ADMIN');
                view.role = (findAdmin != -1) ? 'Administrator' : 'User';
            });
        }


        ProfileService.getProfileInfo().then(function(response) {
            view.inProduction = response.inProduction;
            view.swaggerDisabled = response.swaggerDisabled;
        });


        function logout() {
            Auth.logout();
            $state.go('login');
        }




        view.dropdownToggle = function(event) {
            var jQueryElement = angular.element(event.currentTarget);
            var menuItem = jQueryElement.parent();
            var icon = menuItem.find('.sidebar-menu-item-dropdown_icon');
            var dropdown = menuItem.find('.sidebar-menu-item-dropdown');

            $('.sidebar-menu-item').not(menuItem).removeClass('open');
            $('.sidebar-menu-item-dropdown_icon').not(icon).removeClass('open');
            setTimeout(function(){ $('.sidebar-menu-item-dropdown').not(dropdown).removeClass('open'); }, 500);
            // $('.sidebar-menu-item-dropdown').not(dropdown).removeClass('open');
            
            if(!dropdown.hasClass('open')) menuItem.toggleClass('open');
            icon.toggleClass('open');
            //toggle boxShadow jaki pierwszy tylko przy otwieraniu, przy zamykaniu jako ostatni
            dropdown.toggleClass('open');

            // 500 bo tyle trwa animacja dropdown w css
            if(!dropdown.hasClass('open'))  setTimeout(function(){ menuItem.toggleClass('open'); }, 500);
            
        }

        view.changeState = function(state) {
            $state.go(state);
        }

        view.userDropdownOpen = function() {
            $('.user_dropdown_box').css('display', 'block').attr('tabindex', -1).focus();
        }

        view.userDropdownClose = function() {
            $('.user_dropdown_box').css('display', 'none');
        }









    }
})();
