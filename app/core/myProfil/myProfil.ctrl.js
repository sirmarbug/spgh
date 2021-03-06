(function(){
    'use strict';

    angular
        .module('app')
        .controller('myProfilCtrl', controller)

    controller.$inject = ['$rootScope', '$scope', '$cookies', 'getGitHub'];

    function controller($rootScope, $scope, $cookies, getGitHub) {

        activate();

        function activate() { 
            $scope.showMyProfil = $cookies.get('showMyProfil');
            $scope.showError = false;
            $scope.errorMessage = '';
            
            if ($scope.showMyProfil === 'false') {
                $scope.showMyProfil = false;
            } else {
                $scope.showMyProfil = true;
            }

            $scope.showRegister = $cookies.get('showRegister');
            
            if ($scope.showRegister === 'true') {
                $scope.showRegister = true;
            } else {
                $scope.showRegister = false;
            }
            $scope.nick = $cookies.get('nick');

            if ($scope.nick != null) {
                $scope.showMyProfil = true;
                $scope.showRegister = false;
                $rootScope.nicks = $cookies.get('nick');
                $rootScope.login = true;
                getGitHub.getProfil($scope.nick).then(function (res) {
                    $scope.database = res.data;
                }).catch(function (e) {
                    $scope.showError = true;
                    $scope.errorMessage = e.statusText;
                });
            }

            $scope.saveUser = function () {
                getGitHub.getProfil($scope.nick).then(function (res) {
                    $scope.showError = false;
                    $scope.errorMessage = '';
                    $cookies.put('showMyProfil', true);
                    $cookies.put('showRegister', false);
                    $cookies.put('nick', $scope.nick);
                    $scope.showMyProfil = true;
                    $scope.showRegister = false;
                    $scope.database = res.data;
                    $rootScope.nicks = res.data.login;
                    $rootScope.login = true;
                }).catch(function (e) {
                    $scope.showError = true;
                    $scope.errorMessage = e.statusText;
                });
            }

            $scope.enterPress = function (keyEvent) {
                if (keyEvent.which === 13) $scope.saveUser();
            };
        }
    }
})();