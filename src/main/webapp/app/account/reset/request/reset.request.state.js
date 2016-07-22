(function() {
    'use strict';

    angular
        .module('jhipsterProjectApp')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider.state('requestReset', {
            parent: 'accountVisitor',
            url: '/reset/request',
            data: {
                authorities: []
            },
            views: {
                'content@visitor': {
                    templateUrl: 'app/account/reset/request/reset.request.html',
                    controller: 'RequestResetController',
                    controllerAs: 'resetCtrl'
                }
            },
            resolve: {
                translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                    $translatePartialLoader.addPart('reset');
                    return $translate.refresh();
                }]
            }
        });
    }
})();
