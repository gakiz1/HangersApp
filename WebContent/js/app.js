angular.module("myApp",[])
       .config(function($routeProvider){
        $routeProvider
        .when('/somdas',{
          templateUrl : "somdas.html",
          controller : "insertController"
        })
        .when("/ganesh",{
          templateUrl : "ganesh.html",
          controller : "viewController"
        })
        .otherwise({
          redirectTo : "home.html"
        })
       });
