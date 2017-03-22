var app = angular.module("myApp", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "login.html"
        
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
    .when("/remaining", {
        templateUrl : "pages/remaining.html"
        
    }) 
    .when("/soldItems", {
        templateUrl : "pages/soldItems.html"
        
    }) 
     .otherwise({
          redirectTo : '/'
    });
        
});