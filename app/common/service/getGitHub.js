(function(){
    'use strict';

    angular
        .module('app')
        .factory('getGitHub', factory);

    factory.$inject = ['$http'];

    function factory($http) {
        var db = {};

        db.getProfil = function(nick) {
            return $http({
                method: 'GET',
                url: 'https://api.github.com/users/' + nick
            })
        }

        return db;
    }
})();