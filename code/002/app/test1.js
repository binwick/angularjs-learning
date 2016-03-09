var app = angular.module('app', ['ng-sortable']);

app.controller('firstController', ['$scope', '$filter', function ($scope, $filter) {
    $scope.items = ['zhangSan', 'liSi', 'wangWu'];
    $scope.foo = ['foo 1', 'foo 2'];
    $scope.bar = ['bar 1', 'bar 2'];

    $scope.barConfig = {
        group: 'foobar',
        animation: 150,
        onRemove: function (evt) {
            // same properties as onUpdate
            console.log('onRemove:', evt);
        },
        onAdd: function (evt) {
            console.log($scope.bar);
            console.log($scope.items);
            console.log('onAdd', evt);
        },

    };
}]);