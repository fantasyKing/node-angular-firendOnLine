angular.module('myApp.service',[])
  .factory('registerService',function($http){
    return{
      register:function(data){
        return $http.post('/register', data);
      },
      checkByLoginname:function(){
        return $http.get('/checkByLoginname');
      }
    };
  });
