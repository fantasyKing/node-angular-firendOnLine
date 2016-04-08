angular.module('myApp.service',[])
  .factory('registerService',function($http){
    return{
      register:function(data){
        return $http.post('/register', data);
      },
      checkByLoginname:function(data){
        return $http.post('/checkByLoginname',data);
      }
    };
  });
