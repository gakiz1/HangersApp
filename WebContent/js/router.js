angular.module('HangersModule', [ 'ngRoute', 'ui.grid',
                                'ui.grid.selection' ])

.config(function($routeProvider) {
                $routeProvider

                .when('/', {
                                templateUrl : 'index.html'
                                

                }).when('/accounts', {
                                templateUrl : 'accounts.html'

                }).when('/stockIn', {
                                templateUrl : 'stockIn.html'

                }).when('/sell', {
                                templateUrl : 'sell.html'

                })

                .otherwise({
                                redirectTo : '/'
                });
});
