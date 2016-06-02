var app = angular.module('app', []);
app.controller('firstController', ['$scope', '$filter', '$location', '$anchorScroll', function ($scope, $filter, $location, $anchorScroll) {
    $('.multiple_upldprev:last').each(function () {
        // alert(1);
    });
    $scope.color = {};
    $scope.color.name = 'x';

    var data = [{id:'124',name:'ttt', MeasureDate:"2015-04-05T18:46:38"},
        {id:'589',name:'mmm', MeasureDate:"2015-05-05T18:46:38"},
        {id:'45',name:'yyy' , MeasureDate:"2016-01-05T18:46:38"},
        {id:'567',name:'eee', MeasureDate:"2016-05-05T18:46:38"}];

    var sorted = data.sort(function(a, b) {
        return Date.parse(b.MeasureDate) - Date.parse(a.MeasureDate);
    });

    console.log(sorted)
}]);