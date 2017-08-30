(function () {
    'use strict';

    angular
        .module('app')
        .controller('ctrl', controller)

    controller.$inject = ['$rootScope', '$scope', '$cookies'];

    function controller($rootScope, $scope, $cookies) {

        activate();

        function activate() {
            $cookies.put('showRegister', true);
            $cookies.put('showMyProfil', false);
            $rootScope.nicks = '';

            $rootScope.logout = function () {
                $cookies.put('showRegister', true);
                $cookies.put('showMyProfil', false);
                $cookies.remove('nick');
                $rootScope.nicks = '';
                $rootScope.login = false;
            }
        }
    }
})();