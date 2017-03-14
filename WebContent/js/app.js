/*angular.module('testModule1', [ 'ngRoute'])

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
});*/

angular.module("myApp",['ngRoute'])
	   .config(function($routeProvider){
	   $routeProvider
	   .when("/",{
	   		templateUrl : "pages/1.html"
	   })
	   .when("/2",{
	   		templateUrl : "pages/2.html"
	   })
	   .when("/3",{
	   		templateUrl : "pages/3.html"
	   })
	   .otherwise({
	   		redirectTo : "/"
	   });
	   });