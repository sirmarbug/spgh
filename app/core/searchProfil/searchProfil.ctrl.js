(function(){
    'use strict';

    angular
        .module('app')
        .controller('searchProfil', controller)

    controller.$inject = ['$scope', '$cookies', 'getGitHub'];

    function controller($scope, $cookies, getGitHub) {

        activate();

        function activate() { 
            // $scope.cookies = $cookies.get('wer');
            $scope.saveUser = function () {
                $scope.showMyProfil = true;
                getGitHub.getProfil($scope.nick).then(function (res) {
                    console.log(res.data);
                    $scope.database = res.data;
                });
            }
        }
    }
})();