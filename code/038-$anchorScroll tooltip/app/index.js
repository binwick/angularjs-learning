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
    $scope.amount = 123456;
    $scope.tooltipAmount = '';
    var termAmounts = ['', '十', '百', '千', '万', '十万', '百万', '千万', '亿'];

    var amount = $scope.amount.toString();
    if (amount.lastIndexOf('.') != -1) {
        $scope.tooltipAmount = termAmounts[amount.substr(0, amount.lastIndexOf('.')).length - 1];
    } else {
        $scope.tooltipAmount = termAmounts[amount.length - 1];
    }
}]);