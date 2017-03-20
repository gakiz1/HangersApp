angular.module("myApp") .controller('insertController',function($scope, $http){
			$scope.name = " Somdas ";
		})
	   .controller('viewController', function($scope, $http){
		   	$scope.name = " Ganesh ";
	   });
