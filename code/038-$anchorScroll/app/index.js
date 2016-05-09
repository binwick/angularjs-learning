var app = angular.module('app', []);


app.run(['$anchorScroll', function ($anchorScroll) {

    $anchorScroll.yOffset = -50;   // 总是滚动额外的50像素

}]);
app.controller('firstController', ['$scope', '$filter', '$location', '$anchorScroll', function ($scope, $filter, $location, $anchorScroll) {

    $scope.gotoBottom = function () {

        // 将location.hash的值设置为
        // 你想要滚动到的元素的id
        $location.hash('bottom');

        // 调用 $anchorScroll()
        $anchorScroll();

    };
}]);