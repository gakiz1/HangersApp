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