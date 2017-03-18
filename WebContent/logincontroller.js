/**
 * 
 */
(function () {
    'use strict';

    angular
        .module('hangers')
        .controller('logincontroller', logincontroller)
        .directive('passwordValidate',PasswordValidate);

   
    function logincontroller($location) {
       var ym=this;
       ym.login=Login;
        (function initController() {
          
        })();
        
        ym.clear=function(){
        
        };
        function Login() {
        };
    
    }
    
    function PasswordValidate(){
    	alert('password validate')
    }

})();