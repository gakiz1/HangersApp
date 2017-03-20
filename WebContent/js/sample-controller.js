(function() {
    'use strict';

    angular
        .module('myApp')
        .factory('sampleController', sampleController);

    function sampleController() { 
    	console.log("Hello World");
    }
})();
	 
	   	
