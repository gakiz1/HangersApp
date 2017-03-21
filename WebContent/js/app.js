var app = angular.module("myApp", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "pages/login.htm1"
    })
    .when("/stockIn", {
        templateUrl : "pages/stockIn.html"
    })
    .when("/stockOut", {
        templateUrl : "pages/stockOut.html"
    })
     .when("/accounts", {
        templateUrl : "pages/accounts.html"
    }) 
     .otherwise({
          redirectTo : '/'
    });
        
});