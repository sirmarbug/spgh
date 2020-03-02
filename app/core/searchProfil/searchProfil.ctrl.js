(function () {
    'use strict';

    angular
        .module('app')
        .controller('searchProfil', controller)

    controller.$inject = ['$rootScope','$scope', '$cookies', 'getGitHub'];

    function controller($rootScope, $scope, $cookies, getGitHub) {

        activate();

        function activate() {
            $scope.show = {
                error: false,
                errorMessage: '',
                profil: false
            };

            $scope.nick = $cookies.get('nick');

            if ($scope.nick != null) {
                $rootScope.nicks = $cookies.get('nick');
                $rootScope.login = true;
            }

            $scope.enterPress = function (keyEvent) {
                if (keyEvent.which === 13) $scope.loadUser();
            };

            $scope.loadUser = function () {
                $scope.database = null;
                getGitHub.getProfil($scope.search).then(function (res) {
                    if (res.data.login != null) {
                        $scope.database = res.data;
                        $scope.show.profil = true;
                        $scope.show.error = false;
                    }
                }).catch(function(e){
                    $scope.show.error = true;
                    $scope.show.errorMessage = e.statusText;
                 });
            }
        }
    }
})();