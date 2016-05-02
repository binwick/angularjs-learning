angular.module('myApp', ['ngCookies'])

    .filter('cityFilter', function () {
        return function (data, parent) {
            var filterData = [];
            angular.forEach(data, function (obj) {
                if (obj.parent === parent) {
                    filterData.push(obj);
                }
            })

            return filterData;
        }
    })

    .directive('even', function () {
        return {
            require: 'ngModel',
            link: function (scope, elm, attrs, ngModelController) {
                ngModelController.$parsers.push(function (viewValue) {
                    if (viewValue % 2 === 0) {
                        ngModelController.$setValidity('even', true);
                    } else {
                        ngModelController.$setValidity('even', false);
                    }
                    return viewValue;
                });

//                ngModelController.$formatters.push(function(modelValue){
//                    return modelValue + 'kittencup';
//                })
            }
        };
    })

    .directive('customTextArea', function () {
        return {
            restrict: 'E',
            template: '<div contenteditable="true"></div>',
            replace: true,
            require: 'ngModel',
            link: function (scope, elm, attrs, ngModelController) {


                // view->model
                elm.on('keyup', function () {
                    scope.$apply(function () {
                        ngModelController.$setViewValue(elm.html());
                    });
                })

                ngModelController.$render = function () {
                    elm.html(ngModelController.$viewValue);
                }

            }
        };
    })
    .controller('firstController', ['$scope', '$cookies', '$cookieStore', function ($scope, $cookies, $cookieStore) {
        // $cookieStore.put("name", "my name");
        // $cookieStore.get("name") == "my name";
        // $cookieStore.remove("name");

        $cookieStore.put("person", {
            name: "my name",
            age: 18
        });

        $cookieStore.put('person', {
            name: "new name",
            age: 23
        });


        $scope.person = $cookieStore.get("person");
        console.log($scope.person);
    }]);
