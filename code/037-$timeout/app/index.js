//为我们的demo创建一个应用模块
var app = angular.module("Demo", []);

// 定义控制器
app.controller("DemoController", ['$scope', function ($scope) {
    $scope.section = "happy";
    //在toggle函数中改变section的值，以此在标记中显示/隐藏不同的部分
    $scope.toggle = function () {

        if ($scope.section === "happy") {

            $scope.section = "sad";

        } else {

            $scope.section = "happy";

        }

    };

}
]);


//定义指令
app.directive("bnDirective", ['$timeout', function ($timeout) {
    //将用户界面的事件绑定到$scope上
    function link($scope, element, attributes) {
        //当timeout被定义时，它返回一个promise对象
        var timer = $timeout(function () {
            console.log("Timeout executed", Date.now());
        }, 2000);

        //将resolve/reject处理函数绑定到timer promise上以确保我们的cancel方法能正常运行
        timer.then(function () {
                console.log("Timer resolved!", Date.now());
            }, function () {
                console.log("Timer rejected!", Date.now());
            }
        );


        //当DOM元素从页面中被移除时，AngularJS将会在scope中触发$destory事件。这让我们可以有机会来cancel任何潜在的定时器
        $scope.$on("$destroy", function (event) {
                $timeout.cancel(timer);
            }
        );

    }

    //返回指令的配置
    return ({
        link: link,
        scope: false
    });

}]);

//定义指令
app.directive("bnDirectiveAlt", ['$interval', function ($interval) {
    //将用户界面的事件绑定到$scope上
    function link($scope, element, attributes) {
        //当timeout被定义时，它返回一个promise对象
        var timer = $interval(function () {
            console.log("Interval executed", Date.now());
        }, 10 * 1000);

        //将resolve/reject处理函数绑定到timer promise上以确保我们的cancel方法能正常运行
        timer.then(function () {
                console.log("Timer resolved!", Date.now());
            }, function () {
                console.log("Timer rejected!", Date.now());
            }
        );


        //当DOM元素从页面中被移除时，AngularJS将会在scope中触发$destory事件。这让我们可以有机会来cancel任何潜在的定时器
        $scope.$on("$destroy", function (event) {
                $interval.cancel(timer);
            }
        );

    }

    //返回指令的配置
    return ({
        link: link,
        scope: false
    });

}]);