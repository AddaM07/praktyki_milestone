(function() {
    'use strict';

    angular
        .module('jhipsterProjectApp')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider.state('register', {
            parent: 'accountVisitor',
            url: '/register',
            data: {
                authorities: [],
                pageTitle: 'register.title'
            },
            views: {
                'content@visitor': {
                    templateUrl: 'app/account/register/register.html',
                    controller: 'RegisterController',
                    controllerAs: 'registerCtrl'
                }
            },
            resolve: {
                translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                    $translatePartialLoader.addPart('register');
                    return $translate.refresh();
                }]
            }
        });
    }
})();
