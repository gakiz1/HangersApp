angular.module("myHomeApp",[])
       .controller("myHomeController",function($scope){
        $scope.addUserlog = function(){
          $location.path("index1.html");
        };
       });
