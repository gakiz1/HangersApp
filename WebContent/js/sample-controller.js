(function() {
    'use strict';

    angular.module('myApp')
        	.controller('sampleController', sampleController)
        	.controller('loginController', loginController);

    function sampleController($scope,$http) { 
    	console.log("Hello World");
    	
    	$scope.message="Welcome";
    	
    	
    }
    function loginController($scope,$http){
       $scope.checkCredentials=function(){
        if (($scope.name == null) ||  ($scope.password == null)) {
           window.alert("Please fill the fields !!!!");
            } else if(($scope.name == hangers ) || ($scope.password == Admin)){
              $scope.message="Welcome Admin";
            }
       
       }
    }
    
})();