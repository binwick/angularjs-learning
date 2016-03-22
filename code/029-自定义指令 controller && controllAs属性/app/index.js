angular.module('myApp', [])

    .directive('bookList', function () {
        return {
            restrict: 'ECAM',
            controller: ['$scope', function ($scope) {
                $scope.books = [
                    {
                        name: 'php'
                    }, {
                        name: 'javascript'
                    }, {
                        name: 'java'
                    }
                ];
                /**
                 * 如果这里写$scope.addBook
                 * 那么调用的时候用scope.addBook
                 */
                $scope.addBook = function () {
                    console.log('scope')
                };

                /**
                 * 如果用this.addBook
                 * 调用的时候使用bookListController.addBook
                 */
                this.addBook = function () {
                    // ...
                    console.log('this')
                };
            }],
            controllerAs: 'bookListController',
            template: '<ul><li ng-repeat="book in books">{{book.name}}</li></ul>',
            replace: true,
            link: function (scope, element, attrs, bookListController) {
                // 绑定事件
                element.on('click', bookListController.addBook)
            }
        }

    })

    .controller('firstController', ['$scope', function ($scope) {
        // console.log($scope);


    }]);