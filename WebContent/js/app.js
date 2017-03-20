var myApp = angular.module("myApp",['ngRoute']);
       myApp.config(function($routeProvider){
        $routeProvider
        .when('/',{
              templateUrl : 'home.html'
        })
        .when('/somdas',{
          templateUrl : 'somdas.html',
          controller : 'insertController'
        })
        .when("/ganesh",{
          templateUrl : 'ganesh.html',
          controller : 'viewController'
        })
        .otherwise({
          redirectTo : "/"
        });
       });

