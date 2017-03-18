angular.module('hangers', [ 'ngRoute', 'ngTouch', 'ui.grid',
                                'ui.grid.selection' ])

.config(function($routeProvider) {
                $routeProvider

                .when('/', {
                                templateUrl : 'homePage.html',
                                controller : 'logincontroller'

                }).when('/1', {
                                templateUrl : '1.html',
                                controller : 'logincontroller'

                }).when('/2', {
                                templateUrl : '2.html',
                                controller : 'logincontroller'

                }).when('/3', {
                                templateUrl : '3.html',
                                controller : 'logincontroller'

                })

                .otherwise({
                                redirectTo : '/'
                });
});