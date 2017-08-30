(function(){
    'use strict';

    angular
        .module('app')
        .config(rout)

        rout.$inject = ['$routeProvider'];

    function rout($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'app/core/myProfil/myProfil.tpl.html',
                controller: 'myProfilCtrl'
            })
            .when('/search', {
                templateUrl: 'app/core/searchProfil/searchProfil.tpl.html',
                controller: 'searchProfil'
            })
            .otherwise({
                templateUrl: 'app/core/error.tpl.html',
            })
    }

}());