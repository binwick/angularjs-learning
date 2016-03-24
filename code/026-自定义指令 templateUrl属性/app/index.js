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
        var top = [
            {
                id: '001',
                content: '<custom-tags></custom-tags>'
            }, {
                id: '002',
                content: '<custom-tags2></custom-tags2>'
            }
        ];
        angular.element('.container').append($compile(top[0]['content'])($scope));
        angular.element('.container').append($compile(top[1]['content'])($scope));
    }]);