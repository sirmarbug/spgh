(function () {
    'use strict';

    angular
        .module ('app')
        .directive ('profil', directive);

    directive.$inject = ['$window'];

    function directive($window) {
        // Usage:
        //     <directive></directive>
        // Creates:
        //
        var directive = {
            link: link,
            restrict: 'E',
            scope: {
                db: "="
            },
            templateUrl: 'app/common/directive/profil/profil.tpl.html'
        };
        return directive;

        function link(scope, element, attrs) {
        }
    }

})();