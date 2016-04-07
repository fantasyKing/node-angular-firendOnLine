angular.module('myApp.service')
  .factory('myHttpIntercepter',function($q,$window){
    return{
      'request': function(config) {
        return config;
      },

     'requestError': function(rejection) {
        return $q.reject(rejection);
      },

      'response': function(response) {
        return response;
      },

     'responseError': function(rejection) {
       if(rejection){
         if(rejection.hasOwnProperty('errmsg')){
           if(rejection.errcode >0){
             $window.alert(rejection.errmsg);
           }else{
             $window.alert('系统发生了错误，请稍候再试');
           }
         }else{
           if(rejection.status == 404){
             $window.alert('抱歉后台服务出错，找不到对应的接口');
           }else{
             $window.alert('抱歉,后台服务出错');
           }
         }
       }
        return $q.reject(rejection);
      }
    };
  });
