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
        $scope.location = "http://qr.fd.zol-img.com.cn/qrcode/qrcodegen.php?sizeNum=16&logotype=default&url=http%3A%2F%2Fdesk.fd.zol-img.com.cn%2Ft_s960x600c5%2Fg5%2FM00%2F0F%2F08%2FChMkJlcQe8OIAcHrAAXxSfU6fGQAAP8jQLGOmwABfFh119.jpg&token=c8c7912b51";

    }]);