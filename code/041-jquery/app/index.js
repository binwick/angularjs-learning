var app = angular.module('app', []);
app.controller('firstController', ['$scope', '$filter', '$location', '$anchorScroll', function ($scope, $filter, $location, $anchorScroll) {
    $('.multiple_upldprev:last').each(function () {
        // alert(1);
    });
    $scope.color = {};
    $scope.color.name = 'x';

    var data = [{id: '124', name: 'ttt', MeasureDate: "2015-04-05T18:46:38"},
        {id: '589', name: 'mmm', MeasureDate: "2015-05-05T18:46:38"},
        {id: '45', name: 'yyy', MeasureDate: "2016-01-05T18:46:38"},
        {id: '567', name: 'eee', MeasureDate: "2016-05-05T18:46:38"}];

    var sorted = data.sort(function (a, b) {
        return Date.parse(b.MeasureDate) - Date.parse(a.MeasureDate);
    });

    $('li').sort(function (a, b) {
        var aDate = $(a).find('.itemDate').text();
        var bDate = $(b).find('.itemDate').text();
        // return Date.parse(aDate) - Date.parse(bDate);
        return new Date(aDate).getTime() - new Date(bDate).getTime();
    }).appendTo('ul');

    console.log(sorted);

    $scope.items = {
        1: {
            "John": 123,
            "Doe": 234
        },
        2: {
            "John": 456,
            "Doe": 345
        }
    };
    // $("#btn_click").attr('disabled', true);

    $scope.test = function () {
        var tmp = JSON.jsonToString($scope.item);
        console.log(tmp);
        return tmp;
    }
    var jsonToString=typeof JSON !="undefined"? JSON.stringify :function(obj){
        var arr =[];
        $.each(obj,function(key, val){
            var next = key +": ";
            next += $.isPlainObject(val)? jsonToString(val): val;
            arr.push( next );
        });
        return"{ "+  arr.join(", ")+" }";
    };
}]);