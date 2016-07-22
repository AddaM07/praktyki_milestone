(function() {
    'use strict';

    angular
        .module('jhipsterProjectApp', [
            'ngStorage', 
            'tmh.dynamicLocale',
            'pascalprecht.translate', 
            'ngResource',
            'ngCookies',
            'ngAria',
            'ngCacheBuster',
            'ngFileUpload',
            'ui.bootstrap',
            'ui.bootstrap.datetimepicker',
            'ui.router',
            'infinite-scroll',
            // jhipster-needle-angularjs-add-module JHipster will add new module here
            'angular-loading-bar',
            'ngMaterial'
        ])
        .run(run);

    run.$inject = ['stateHandler', 'translationHandler', '$rootScope'];

    function run(stateHandler, translationHandler, $rootScope) {
        stateHandler.initialize();
        translationHandler.initialize();

        // $rootScope.$on('$stateChangeStart',function(event, toState, toParams, fromState, fromParams){
        //     console.log('$stateChangeStart to '+toState.to+'- fired when the transition begins. toState,toParams : \n',toState, toParams);
        // });
        // $rootScope.$on('$stateChangeError',function(event, toState, toParams, fromState, fromParams, error){
        //     console.log('$stateChangeError - fired when an error occurs during transition.');
        //     console.log(arguments);
        // });
        // $rootScope.$on('$stateChangeSuccess',function(event, toState, toParams, fromState, fromParams){
        //     console.log('$stateChangeSuccess to '+toState.name+'- fired once the state transition is complete.');
        // });
        // // $rootScope.$on('$viewContentLoading',function(event, viewConfig){
        // //   // runs on individual scopes, so putting it in "run" doesn't work.
        // //   console.log('$viewContentLoading - view begins loading - dom not rendered',viewConfig);
        // // });
        // $rootScope.$on('$viewContentLoaded',function(event){
        //     console.log('$viewContentLoaded - fired after dom rendered',event);
        // });
        // $rootScope.$on('$stateNotFound',function(event, unfoundState, fromState, fromParams){
        //     console.log('$stateNotFound '+unfoundState.to+'  - fired when a state cannot be found by its name.');
        //     console.log(unfoundState, fromState, fromParams);
        // });
    }
})();
