angular.module("myApp",['ngRoute'])
	   .config(function($routeProvider){
	   					$routeProvider
	   								.when("/index1.html#2",{
	   											templateUrl : "pages/2.html"
	   									  })
	   								.when("/index1.html#3",{
	   											templateUrl : "pages/3.html"
	   									  })
	   								.otherwise({
	   											redirectTo : "/"
	   									  });
	   });
