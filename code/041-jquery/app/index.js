var app = angular.module('app', []);
app.controller('firstController', ['$scope', '$filter', '$location', '$anchorScroll', function ($scope, $filter, $location, $anchorScroll) {
    $('.multiple_upldprev:last').each(function () {
        // alert(1);
    });
    $scope.color = {};
    $scope.color.name = 'x';
}]);