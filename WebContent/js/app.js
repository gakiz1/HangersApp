angular.module("myApp",['ngRoute'])
	   .config(function($routeProvider){
	   					$routeProvider
	   								.when("/2",{
	   											templateUrl : "pages/2.html",
												controller : "myController"
	   									  })
	   								.when("/3",{
	   											templateUrl : "pages/3.html",
												controller : "myController"
	   									  })
	   								.otherwise({
	   											redirectTo : "/"
	   									  });
	   });
