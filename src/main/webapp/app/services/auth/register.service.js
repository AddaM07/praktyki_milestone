(function () {
    'use strict';

    angular
        .module('jhipsterProjectApp')
        .factory('Register', Register);

    Register.$inject = ['$resource'];

    function Register ($resource) {
        return $resource('api/register', {}, {});
    }
})();
