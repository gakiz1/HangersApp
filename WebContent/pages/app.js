angular.module('testModule', [ 'ngRoute'])

.config(function($routeProvider) {
                $routeProvider

             .when('/2', {
                                templateUrl : '2.html',
                                controller : 'insertController'

                }).when('/3', {
                                templateUrl : '3.html',
                                controller : 'insertController'

                })

                .otherwise({
                                redirectTo : '/'
                });
});