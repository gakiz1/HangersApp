angular.module("myApp",[])
	   .controller("sampleController", function($scope, $http){
	   $scope.divEnabled = false;
			$scope.addUserlog=function(){
				var payload = {};
				payload.uname = $scope.name;
				payload.pass= $scope.pass;
				$scope.divEnabled = true;
			}
	   });
