var echartsApp = angular.module('ng-echarts', []);
echartsApp.directive('line', function () {
    return {
        scope: {
            id: "@",
            legend: "=",
            item: "=",
            data: "=",
            title: "@"
        },
        restrict: 'E',
        template: '<div style="height:400px ;"></div>',
        replace: true,
        link: function ($scope, element, attrs, controller) {
            var option = {
                title: {
                    text: $scope.title
                },
                // 提示框，鼠标悬浮交互时的信息提示
                tooltip: {
                    show: true,
                    // trigger: 'item'
                    trigger: 'axis'
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
                    var service = [];
                    for (var i = 0; i < $scope.legend.length; i++) {
                        var item = {
                            name: $scope.legend[i],
                            type: 'line',
                            data: $scope.data[i]
                        };
                        service.push(item);
                    }
                    return service;
                }()
            };
            var myChart = echarts.init(document.getElementById($scope.id), 'macarons');
            myChart.setOption(option);
        }
    };
});
echartsApp.directive('bar', function () {
    return {
        scope: {
            id: "@",
            legend: "=",
            item: "=",
            data: "=",
            title: "@"
        },
        restrict: 'E',
        template: '<div style="height:400px ;"></div>',
        replace: true,
        link: function ($scope, element, attrs, controller) {
            var option = {
                title: {
                    text: $scope.title
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                        type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                    }
                },
                legend: {
                    data: $scope.legend
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis: [
                    {
                        type: 'category',
                        data: $scope.item
                    }
                ],
                yAxis: [
                    {
                        type: 'value'
                    }
                ],
                // 数据内容数组
                series: function () {
                    var service = [];
                    for (var i = 0; i < $scope.legend.length; i++) {
                        var item = {
                            name: $scope.legend[i],
                            type: 'bar',
                            data: $scope.data[i]
                        };
                        service.push(item);
                    }
                    return service;
                }()
            };
            var myChart = echarts.init(document.getElementById($scope.id), 'macarons');
            myChart.setOption(option);
        }
    };
});
echartsApp.directive('pie', function () {
    return {
        scope: {
            id: "@",
            legend: "=",
            item: "=",
            data: "=",
            title: "@"
        },
        restrict: 'E',
        template: '<div style="height:400px ;"></div>',
        replace: true,
        link: function ($scope, element, attrs, controller) {
            var option = {
                title: {
                    text: $scope.title,
                    x: 'center'
                },
                tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/>{b} : {c} ({d}%)"
                },
                legend: {
                    orient: 'vertical',
                    left: 'left',
                    data: $scope.legend
                },
                series: [
                    {
                        // name: '访问来源',
                        type: 'pie',
                        radius: '55%',
                        center: ['50%', '60%'],
                        // data: [
                        //     
                        // ],
                        data: function () {
                            var datas = [];
                            for (var i = 0; i < $scope.data.length; i++) {
                                var item = {
                                    name: $scope.data[i].name,
                                    value: $scope.data[i].value
                                };
                                datas.push(item);
                            }
                            return datas;
                        }(),
                        itemStyle: {
                            emphasis: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                        }
                    }
                ]
            };

            var myChart = echarts.init(document.getElementById($scope.id), 'macarons');
            myChart.setOption(option);
        }
    };
});

var app = angular.module('app', ['ng-echarts']);
app.controller('firstController', ['$scope', '$filter', '$location', '$anchorScroll', function ($scope, $filter, $location, $anchorScroll) {
    $scope.legend = ["Berlin", "London", 'New York', 'Tokyo'];
    $scope.item = ['Jan', 'Feb', 'Mar', 'Apr', 'Mar', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    $scope.data = [
        [-1, 1, 3, 7, 13, 16, 18, 16, 15, 9, 4, 2], //Berlin  
        [0, 1, 4, 7, 12, 15, 16, 15, 15, 10, 6, 5], //London  
        [4, 4, 5, 10, 16, 22, 25, 24, 20, 14, 9, 3],    //New York  
        [7, 6, 8, 14, 17, 22, 25, 27, 24, 17, 14, 10]   //Tokyo  
    ];

    $scope.legend2 = ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎'];
    $scope.data2 = [
        {value: 335, name: '直接访问'},
        {value: 310, name: '邮件营销'},
        {value: 234, name: '联盟广告'},
        {value: 135, name: '视频广告'},
        {value: 1548, name: '搜索引擎'}
    ];

}]);