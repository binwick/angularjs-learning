var app = angular.module('app', []);
//angular-directive
app // app 模块
    .directive('bsDatepicker', function ($filter) {
        return {
            restrict: 'A',
            scope: {
                date: "=ngModel"
            },
            link: function (scope, element, attrs) {
                element.parent().datetimepicker({
                    locale: 'zh-CN',
                    format: 'YYYY-MM-DD HH:mm:ss',
                    sideBySide: false,
                    showClear: false
                });
                console.log(scope.date);
                var format = attrs['dateFormat'];
                element.parent().on('dp.change', function (e) {
                    console.log(scope.date);
                    if (e.date) {
                        var newDate = new Date(e.date);
                        scope.$apply(function () {
                            scope.date = $filter('date')(newDate, format);
                        });
                    }
                });

            }
        }
    })
    .controller('firstController', ['$scope', '$filter', function ($scope, $filter) {
        $scope.date = 'zhangsan';

        var name = '"a", "b"';
        name = name.replace(/"([^"])"/g, "'$1'");

        var tmpDirective = "myDatePicker";
        tmpDirective = tmpDirective.replace(/([A-Z])/g, "-$1").toLowerCase();
        console.log(tmpDirective);
        tmpDirective = tmpDirective.replace(/-(\w)/g, function (all, letter) {
            console.log(all, letter);
            return letter.toUpperCase();
        });
        console.log(tmpDirective);
        //angular.element('#datetimepicker1').datetimepicker({
        //    format: 'YYYY-MM-DD HH:mm:ss',
        //    locale: 'zh-CN'
        //});
        //angular.element('#datetimepicker1').on('dp.change', function (e) {
        //    $scope.$apply(function () {
        //        $scope.date = $filter('date')(new Date(e.date), 'yyyy-MM-dd HH:mm:ss')
        //    })
        //});
        var a = 1, b = 1, bb = 0, c = 1, cc = 0, d = 1, dd = 0;
        var flag = false;

        if (a == 1
            && ( b == 1 || bb == 1)
            && ( c == 1 || cc == 1)
            && (d == 1 || dd == 1)) {
            flag = true;
        }

        console.log(flag);

        $scope.data = {
            0: "0000",
            1: "1111",
            2: "2222"
        };

        $scope.showChange = function () {
            console.log('show change:', typeof $scope.myKey);
        }

    }]);