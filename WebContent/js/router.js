angular.module('HangersModule', [ 'ngRoute', 'ui.grid',
                                'ui.grid.selection' ])

.config(function($routeProvider) {
                $routeProvider

                .when('/', {
                                templateUrl : 'index.html',
                                controller : 'insertController'

                }).when('/accounts', {
                                templateUrl : 'accounts.html',
                                controller : 'insertController'

                }).when('/stockIn', {
                                templateUrl : 'stockIn.html',
                                controller : 'insertController'

                }).when('/#sell', {
                                templateUrl : 'sell.html',
                                controller : 'insertController'

                })

                .otherwise({
                                redirectTo : '/'
                });
});
