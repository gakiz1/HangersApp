angular.module("myApp",['ngRoute'])
       .config(function($routeProvider){
        $routeProvider
        .when('/',{
              templateUrl : 'home.html'
        })
        .when('/somdas',{
          templateUrl : 'somdas.html',
          controller : insertController
        })
        .when("/ganesh",{
          templateUrl : 'ganesh.html',
          controller : viewController
        })
        .otherwise({
          redirectTo : "/"
        });
       })
       .controller('insertController',function($scope, $http){
			$scope.name = " Somdas ";
		})
	   .controller('viewController', function($scope, $http){
		   	$scope.name = " Ganesh ";
	   });

