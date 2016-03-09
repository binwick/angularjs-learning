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
                    var newDate = new Date(e.date);
                    scope.$apply(function () {
                        scope.date = $filter('date')(newDate, format);
                    });
                });

            }
        }
    })
    .controller('firstController', ['$scope', '$filter', function ($scope, $filter) {
        $scope.date = 'zhangsan';


        //angular.element('#datetimepicker1').datetimepicker({
        //    format: 'YYYY-MM-DD HH:mm:ss',
        //    locale: 'zh-CN'
        //});
        //angular.element('#datetimepicker1').on('dp.change', function (e) {
        //    $scope.$apply(function () {
        //        $scope.date = $filter('date')(new Date(e.date), 'yyyy-MM-dd HH:mm:ss')
        //    })
        //});
    }]);