(function() {
    'use strict';

    angular
        .module('jhipsterProjectApp')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider.state('visitor', {
            parent: 'app',
            abstract: true,
            views: {
                '': {
                    templateUrl: 'app/visitor/visitor.html',
                    controller: 'VisitorController'
                }
            }
        });
    }
})();
