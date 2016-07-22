(function() {
    'use strict';

    angular
        .module('jhipsterProjectApp')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider.state('password', {
            parent: 'accountDashboard',
            url: '/password',
            data: {
                authorities: ['ROLE_USER'],
                pageTitle: 'global.menu.account.password'
            },
            views: {
                'content@dashboard': {
                    templateUrl: 'app/account/password/password.html',
                    controller: 'PasswordController',
                    controllerAs: 'vm'
                }
            },
            resolve: {
                translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                    $translatePartialLoader.addPart('password');
                    return $translate.refresh();
                }]
            }
        });
    }
})();
