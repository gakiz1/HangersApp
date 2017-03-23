(function() {
    'use strict';

    angular.module('myApp')
        	.controller('sampleController', sampleController)
        	.controller('loginController', loginController)
        	.controller('stockInController', stockInController)
        	.controller('stockOutController', stockOutController)
        	.controller('accountController', accountController);

    function sampleController($scope,$http) { 
    	console.log("Hello World");
    	$scope.message="Welcome";
    }
    
    function loginController($scope,$http){
       $scope.checkCredentials=function(){
        if (($scope.name == null) ||  ($scope.password == null)) {
           window.alert("Please fill the fields !!!!");
            } else if(($scope.name == "hangers" ) || ($scope.password == "Admin")){
              $scope.message="Welcome Admin!!!";
            }else{
              $scope.message="Wrong Credentials";
            }
       }
    }
    
     function stockInController($scope,$http) { 
    	
    	$scope.addStock=function(){
    	if (($scope.itemCode == null) ||  ($scope.itemType == null) ||($scope.brand == null) ||  ($scope.quantity == null) ||($scope.size == null) ||($scope.unitPrice == null) || ($scope.date== null)) {
           window.alert("Please fill the fields !!!!");
            } else{
              $scope.message="Successfully Added the stock";
            }
    	}
    }
    
     function stockOutController($scope,$http) { 
    	
    	$scope.sell=function(){
    	if (($scope.itemCode == null) || ($scope.quantity == null) ||($scope.sellingPrice == null) || ($scope.date== null)){
           window.alert("Please fill the fields !!!!");
            } else{
              $scope.message="Sold Out!!!";
            }
    	}
    }
    
     function accountController($scope,$http) { 
    	
    	$scope.accounts=function(){
    	if (($scope.fromDate == null) || ($scope.toDate== null)) {
           window.alert("Please fill the fields !!!!");
            } else{
              $scope.message="Accout Details";
            }
    	}
    }
    
})();