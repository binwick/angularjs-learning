var app = angular.module('app', []);
app.directive('line', function () {
    return {
        scope: {
            id: "@",
            legend: "=",
            item: "=",
            data: "="
        },
        restrict: 'E',
        template: '<div style="height:400px ;"></div>',
        replace: true,
        link: function ($scope, element, attrs, controller) {
            var option = {
                // 提示框，鼠标悬浮交互时的信息提示
                tooltip: {
                    show: true,
                    trigger: 'item'
                },
                // 图例
                legend: {
                    data: $scope.legend
                },
                // 横轴坐标轴
                xAxis: [{
                    type: 'category',
                    data: $scope.item
                }],
                // 纵轴坐标轴
                yAxis: [{
                    type: 'value'
                }],
                // 数据内容数组
                series: function () {
                    var serie = [];
                    for (var i = 0; i < $scope.legend.length; i++) {
                        var item = {
                            name: $scope.legend[i],
                            type: 'line',
                            data: $scope.data[i]
                        };
                        serie.push(item);
                    }
                    return serie;
                }()
            };
            var myChart = echarts.init(document.getElementById($scope.id), 'macarons');
            myChart.setOption(option);
        }
    };
});
app.controller('firstController', ['$scope', '$filter', '$location', '$anchorScroll', function ($scope, $filter, $location, $anchorScroll) {
    $scope.legend = ["Berlin", "London", 'New York', 'Tokyo'];
    $scope.item = ['Jan', 'Feb', 'Mar', 'Apr', 'Mar', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    $scope.data = [
        [-1, 1, 3, 7, 13, 16, 18, 16, 15, 9, 4, 2], //Berlin  
        [0, 1, 4, 7, 12, 15, 16, 15, 15, 10, 6, 5], //London  
        [4, 4, 5, 10, 16, 22, 25, 24, 20, 14, 9, 3],    //New York  
        [7, 6, 8, 14, 17, 22, 25, 27, 24, 17, 14, 10]   //Tokyo  
    ];

}]);