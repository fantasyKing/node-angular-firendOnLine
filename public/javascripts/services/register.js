angular.module('myApp.service',[])
  .service('registerService',function($http){
    return{
      register:function(data){
        return $http.post('/register', data);
      }
    };
  });
