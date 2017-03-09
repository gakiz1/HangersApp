angular.module("HangersModule",[])
		.controller("insertController",function($scope, $http){
			$scope.StockIn = function(){
				var payload = {
						"itemCode"   : $scope.ITEM_CODE,
						"itemCategory": $scope.ITEM_CATEGORY,
						"itemBrand" : $scope.ITEM_BRAND,
						"itemSize"	: $scope.ITEM_SIZE,
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
			
		})
	   .controller("viewController", function($scope, $http){
		   $scope.getAllItems=function(){
		   $http.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
		   $http.get("https://digitaldining.herokuapp.com/service/rest/getAll")
		   		.success(function(response){
		   			$scope.allItems = response;
		   			console.log(response);
		   		})
		   		.error(function(response){
		   			console.log("Internal error : "+response);
		   		});
	   };
	   });