var app = angular.module("myApp", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "login.html",
        controller  : "loginController"
        
    })
    .when("/stockIn", {
        templateUrl : "pages/stockIn.html",
        controller  : "stockInController"
        
    })
    .when("/stockOut", {
        templateUrl : "pages/stockOut.html",
        controller  : "stockOutController"
        
    })
     .when("/accounts", {
        templateUrl : "pages/accounts.html",
        controller  : "accountsController"
        
    }) 
    .when("/remaining", {
        templateUrl : "pages/remaining.html",
        controller  : "sampleController"
        
    }) 
    .when("/soldItems", {
        templateUrl : "pages/soldItems.html",
        controller  : "sampleController"
        
    }) 
     .otherwise({
          redirectTo : '/'
    });
        
});