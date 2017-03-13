angular.module("HangersModule",[])
		.controller("insertController",function($scope, $http){
			$scope.divEnabled = false;
			$scope.StockIn = function(){
				var payload = {
						"itemCode"   : $scope.ITEM_CODE,
						"itemCategory": $scope.ITEM_CATEGORY,
						"itemSize"	: $scope.ITEM_SIZE,
						"itemBrand" : $scope.ITEM_BRAND,
						"itemPrice" : $scope.ITEM_PRICE,
						"dateIn" : $scope.DATE_IN,
						
				};
				console.log(payload);
				$http.post("https://hangers.herokuapp.com/service/rest/insertNewItem", payload)
					.success(function(response){
						console.log(response);
					})
					.error(function(response){
						console.log("Error : "+response);
					});
			}
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
	