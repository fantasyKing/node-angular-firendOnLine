angular.module('myApp.service',[])
  .factory('registerService',function($http,$rootScope){
    return{
      register:function(data){
        return $http.post('/register', data);
      },
      checkByLoginname:function(data){
        return $http.post('/checkByLoginname',data);
      },
      checkValues:function(scope){
        var user = scope.user;
        if(!user.username){
          scope.msg = "用户名不能为空";
          scope.tilte="警告";
          scope.alertType = 'alert-danger';
          return false;
        }
        if(!user.password){
          scope.msg = "密码不能为空";
          scope.tilte="警告";
          scope.alertType = 'alert-danger';
          return false;
        }
        if(!user.repeatpass){
          scope.msg = "请输入确认密码";
          scope.tilte="警告";
          scope.alertType = 'alert-danger';
          return false;
        }
        if(user.password !== user.repeatpass){
          scope.msg = "密码和确认密码不等，请重新输入";
          scope.tilte="警告";
          scope.alertType = 'alert-danger';
          return false;
        }
        return true;
      }
    };
  });
