var app = angular.module("myApp", ["ngRoute","kendo.directives"]);
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
        controller  : "accountController"
        
    }) 
    .when("/remaining", {
        templateUrl : "pages/remaining.html",
        controller  : "remainingController"
        
    }) 
    .when("/soldItems", {
        templateUrl : "pages/soldItems.html",
        controller  : "soldController"
        
    }) 
     .otherwise({
          redirectTo : '/'
    });
        
});