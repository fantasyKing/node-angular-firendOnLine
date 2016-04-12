angular.module('myApp.service')
 .factory('loginService',function($http){
   return{
     login:function(data){
       return $http.post('/login',data);
     }
   };
 });
