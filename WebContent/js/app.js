angular.module('myApp',['ngRoute'])
       .config(function($routeProvider){
        $routeProvider
        .when('/',{
              templateUrl : 'home.html',
                controller : 'insertController'
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
          redirectTo : '/'
        });
       });

