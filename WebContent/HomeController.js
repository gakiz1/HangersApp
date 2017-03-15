angular.module('sample').controller('HomeController', function($scope, $http) {

                $scope.retrieveDetails = function() {
                                window.location = "#/display";
                };

                $scope.uploadDetails = function() {
                                window.location = "#/upload";
                };

});
