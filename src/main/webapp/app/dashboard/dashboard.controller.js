(function() {
    'use strict';

    angular
        .module('jhipsterProjectApp')
        .controller('DashboardController', DashboardController);

    DashboardController.$inject = ['$scope', 'Principal', 'LoginService', '$state'];

    function DashboardController ($scope, Principal, LoginService, $state) {
        var view = this;
    }
})();
