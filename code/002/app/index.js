var app = angular.module('app', []);
//angular-directive
app.directive('draggable', ['$document', function ($document) {
    return function (scope, element, attr) {
        var startX = 0, startY = 0, x = 0, y = 0;
        element = angular.element(document.getElementsByClassName("modal-dialog"));
        element.css({
            position: 'relative',
            cursor: 'move'
        });

        element.on('mousedown', function (event) {
            // Prevent default dragging of selected content
            event.preventDefault();
            startX = event.pageX - x;
            startY = event.pageY - y;
            $document.on('mousemove', mousemove);
            $document.on('mouseup', mouseup);
        });

        function mousemove(event) {
            y = event.pageY - startY;
            x = event.pageX - startX;
            element.css({
                top: y + 'px',
                left: x + 'px'
            });
        }

        function mouseup() {
            $document.off('mousemove', mousemove);
            $document.off('mouseup', mouseup);
        }
    };
}]);

app.controller('firstController', ['$scope', '$filter', function ($scope, $filter) {
    $scope.date = 'zhangsan';


    angular.element('#datetimepicker1').datetimepicker({
        format: 'YYYY-MM-DD HH:mm:ss',
        locale: 'zh-CN'
    });
    angular.element('#datetimepicker1').on('dp.change', function (e) {
        $scope.$apply(function () {
            $scope.date = $filter('date')(new Date(e.date), 'yyyy-MM-dd HH:mm:ss')
        })
    });
    console.log($scope.date)
}]);