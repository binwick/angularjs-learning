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
                var format = attrs['dateFormat'];
                element.parent().on('dp.change', function (e) {
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


    }]);