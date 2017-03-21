var app = angular.module("myApp", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "pages/2.htm1"
    })
    .when("/test2", {
        templateUrl : "pages/2.html"
    })
    .when("/test3", {
        templateUrl : "pages/3.html"
    })    
});