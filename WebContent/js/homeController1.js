angular.module("myHomeApp",[])
       .controller("myHomeController",function($scope, $location){
        $scope.addUserlog = function(){
               console.log("testing...");
          $location.path("index1.html");
        };
       });
