var app = angular.module('app', ['ng-sortable']);

app.controller('firstController', ['$scope', '$filter', function ($scope, $filter) {
    $scope.items = ['zhangSan', 'liSi', 'wangWu'];
    $scope.foo = ['foo 1', 'foo 2'];
    $scope.bar = ['bar 1', 'bar 2'];
    $scope.barConfig = {
        group: 'foobar',
        animation: 150,
        onSort: function (evt) {
            console.log('onSort:', evt);
        },
        // Element is removed from the list into another list
        onRemove: function (/**Event*/evt) {
            // same properties as onUpdate
            console.log('onRemove:', evt);
        },

        // Attempt to drag a filtered element
        onFilter: function (/**Event*/evt) {
            var itemEl = evt.item;  // HTMLElement receiving the `mousedown|tapstart` event.
            console.log('onFilter:', itemEl);
        },

        // Event when you move an item in the list or between lists
        onMove: function (/**Event*/evt) {
            // Example: http://jsbin.com/tuyafe/1/edit?js,output
            evt.dragged; // dragged HTMLElement
            evt.draggedRect; // TextRectangle {left, top, right и bottom}
            evt.related; // HTMLElement on which have guided
            evt.relatedRect; // TextRectangle
            // return false; — for cancel
            console.log('onMove:', evt)
        }
    };
}]);