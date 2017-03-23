(function() {
    'use strict';

    angular.module('myApp')
        	.controller('sampleController', sampleController);

    function sampleController($scope) { 
    	console.log("Hello World");
    	
    	$scope.message="Welcome";
    }
    
})();