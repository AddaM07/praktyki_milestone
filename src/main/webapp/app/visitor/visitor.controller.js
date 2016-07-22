(function() {
    'use strict';

    angular
        .module('jhipsterProjectApp')
        .controller('VisitorController', VisitorController);

    VisitorController.$inject = ['$scope', 'Principal', 'LoginService', '$state'];

    function VisitorController ($scope, Principal, LoginService, $state) {
        var view = this;

        
    }
})();
