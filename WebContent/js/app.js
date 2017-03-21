var app = angular.module("myApp", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "login.html"
        controller :sampleController
    })
    .when("/stockIn", {
        templateUrl : "pages/stockIn.html"
        controller :sampleController
    })
    .when("/stockOut", {
        templateUrl : "pages/stockOut.html"
        controller :sampleController
    })
     .when("/accounts", {
        templateUrl : "pages/accounts.html"
        controller :sampleController  
    }) 
     .otherwise({
          redirectTo : '/'
    });
        
});