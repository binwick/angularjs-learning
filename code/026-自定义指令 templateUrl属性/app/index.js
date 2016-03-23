var myApp = angular.module('myApp', [])

    .directive('customTags', function () {
        return {
            restrict: 'ECAM',
            templateUrl: 'tmp/other.html',
            replace: true
        }
    })

    .directive('customTags2', function () {
        return {
            restrict: 'ECAM',
            templateUrl: 'customTags2',
            replace: true
        }
    })

    .controller('firstController', ['$scope', '$compile', function ($scope, $compile) {
        $scope.name = '张三';

        angular.element('.container').append($compile('<custom-tags></custom-tags>')($scope));
    }]);