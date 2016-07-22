(function() {
    'use strict';

    angular
        .module('jhipsterProjectApp')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider.state('login', {
            parent: 'visitor',
            url: '/login',
            data: {
                roles: []
            },
            views: {
                'content@visitor': {
                    templateUrl: 'app/login/login.html',
                    controller: 'LoginNewController',
                    controllerAs: 'loginCtrl'
                }
            }
        });
    }

})();