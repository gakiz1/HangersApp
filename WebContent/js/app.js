angular.module('testModule1', [ 'ngRoute'])

.config(function($routeProvider) {
                $routeProvider
               .when('/', {
                                templateUrl : '2.html',
                                controller : 'insertController'

                }).when('/2', {
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
