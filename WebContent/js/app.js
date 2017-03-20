angular.module("myApp",['ngRoute'])
	   .config(['$routeProvider', function($routeProvider){
		$routeProvider
			.when("/test2",{
				templateUrl : "pages/2.html",
				controller: "myController"
			})
			.when("/test3",{
				templateUrl : "pages/3.html",
				controller: "myController"
			})
			.otherwise({
				redirectTo : "/"
			});
	   }]);
