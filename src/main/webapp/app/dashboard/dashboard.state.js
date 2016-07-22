(function() {
    'use strict';

    angular
        .module('jhipsterProjectApp')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider.state('dashboard', {
            parent: 'app',
            abstract: true,
            views: {
                '': {
                    templateUrl: 'app/dashboard/dashboard.html',
                    controller: 'DashboardController'
                },
                'navbar@dashboard': {
                    templateUrl: 'app/layouts/navbar/navbar.html',
                    controller: 'NavbarController',
                    controllerAs: 'navbarCtrl'
                },
                'sidebar@dashboard': {
                    templateUrl: 'app/layouts/sidebar/sidebar.html',
                    controller: 'SidebarController',
                    controllerAs: 'sidebarCtrl'
                }
            }
        });
    }
})();
