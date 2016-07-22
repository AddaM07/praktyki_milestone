(function() {
	'use strict';

	angular
		.module('jhipsterProjectApp')
		.controller('LoginNewController', LoginNewController);

	LoginNewController.$inject = ['$rootScope', '$state', '$timeout', 'Auth'];

	function LoginNewController($rootScope, $state, $timeout, Auth) {
		var view = this;

        view.authenticationError = false;
        view.cancel = cancel;
        view.credentials = {};
        view.login = login;
        view.password = null;
        view.register = register;
        view.rememberMe = true;
        view.requestResetPassword = requestResetPassword;
        view.username = null;

        // $timeout(function (){angular.element('#username').focus();});

        function cancel () {
            view.credentials = {
                username: null,
                password: null,
                rememberMe: true
            };
            view.authenticationError = false;
            // $uibModalInstance.dismiss('cancel');
        }

        function login (event) {
            event.preventDefault();
            Auth.login({
                username: view.username,
                password: view.password,
                rememberMe: view.rememberMe
            }).then(function () {
                view.authenticationError = false;
                // $uibModalInstance.close();
                if ($state.current.name === 'register' || $state.current.name === 'activate' ||
                    $state.current.name === 'finishReset' || $state.current.name === 'requestReset') {
                    $state.go('home');
                }

                $rootScope.$broadcast('authenticationSuccess');

                // previousState was set in the authExpiredInterceptor before being redirected to login modal.
                // since login is succesful, go to stored previousState and clear previousState
                if (Auth.getPreviousState()) {
                    var previousState = Auth.getPreviousState();
                    Auth.resetPreviousState();
                    $state.go(previousState.name, previousState.params);
                }

                $state.go('home');

            }).catch(function () {
                view.authenticationError = true;
            });
        }

        function register () {
            // $uibModalInstance.dismiss('cancel');
            $state.go('register');
        }

        function requestResetPassword () {
            // $uibModalInstance.dismiss('cancel');
            $state.go('requestReset');
        }


	}

})();