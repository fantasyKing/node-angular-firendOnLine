angular.module('myApp.service')
 .factory('userSaveService',function(){
   var _user = {};
   return{
     save:function(user){
       _user = user;
     },
     getUser:function(){
       return _user;
     }
   };
 });
