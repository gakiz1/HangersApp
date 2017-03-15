angular.module('sample', [ 'ngRoute'])

.config(function($routeProvider) {
                $routeProvider

                .when('/', {
                                templateUrl : '1.html',
                                controller : 'HomeController'

                }).when('/3', {
                                templateUrl : '3.html',
                                controller : 'HomeController'

                }).when('/2', {
                                templateUrl : '2.html',
                                controller : 'HomeController'

                .otherwise({
                                redirectTo : '/'
                });
});

