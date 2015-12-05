angular.module('app')
    .directive('itemCondition', function () {
        return {
            restrict: 'E',
            replace: true,
            templateUrl : 'scripts/app.directive.template.html',
            link: function (scope, ele, attr) {

            }
        }
    });