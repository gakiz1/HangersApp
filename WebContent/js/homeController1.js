angular.module("myHomeApp",[])
       .controller("myHomeController",function($scope, $location){
        $scope.addUserlog = function(){
          $location.path("index1.html");
        };
       });
