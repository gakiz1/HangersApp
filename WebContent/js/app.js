angular.module("myApp1",['ngRoute'])
	   .config(function($routeProvider){
	   					$routeProvider
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
