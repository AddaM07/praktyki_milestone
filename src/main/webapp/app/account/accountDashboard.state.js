(function() {
    'use strict';

    angular
        .module('jhipsterProjectApp')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider.state('accountDashboard', {
            abstract: true,
            parent: 'dashboard'
        });
    }
})();
