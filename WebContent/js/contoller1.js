angular.module("testModule1",[])
		.controller("insertController",function($scope, $http){
		$scope.divEnabled = false;
			$scope.addUserlog=function(){
				var payload = {};
				payload.uname = $scope.name;
				payload.pass= $scope.pass;
				console.log(payload);
				console.log($scope.divEnabled);
					$scope.divEnabled = true;
				console.log($scope.divEnabled);
			}
			
		});
	