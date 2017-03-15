angular.module("myHomeApp",[])
       .controller("myHomeController",function($scope){
        $scope.addUserlog = function(){
               console.log("testing...");
          window.location = "index1.html";
        };
       });
