angular.module("myApp",['ngRoute'])
	   .config(function($routeProvider){
	   					$routeProvider
	   								.when("/test2",{
	   											templateUrl : "pages/2.html"
	   									  })
	   								.when("/test3",{
	   											templateUrl : "pages/3.html"
	   									  })
	   								.otherwise({
	   											redirectTo : "/"
	   									  });
	   });
