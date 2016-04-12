angular.module('myApp.controller',[])
  .controller('loginCtrl',function($scope,$rootScope,$state){
    $scope.alertShow = false;
    $scope.msg = "";
    $scope.title = "";
    $scope.alertType = "alert-danger";
    $scope.$on('showAlert',function(scope,title,msg,alertType){
      $scope.title = title;
      $scope.msg = msg;
      $scope.alertType = alertType;
      $scope.alertShow = true;
    });
    $scope.$on('hideAlert',function(){
      $scope.alertShow = false;
    });
  })
  .controller('loginloCtrl',function($scope,$state,$timeout,loginService){
    $scope.goRegister = function(){
      $scope.showflag = false;
      $timeout(function(){
        $state.go('login.register');
      },110);
    };
    $scope.showflag = false;
    $timeout(function(){
        $scope.showflag = true;
    },100);
    $scope.user = {};
    $scope.login = function(){
      var data = {};
      data.loginName = $scope.user.username;
      data.pass = $scope.user.password;
      loginService.login(data).success(function(data){
        var result = data[0];
        if(result.flag){
          $scope.tilte = '成功';
          $scope.msg= '登录成功！';
          $scope.alertType = 'alert-success';
          $scope.$emit('showAlert',$scope.tilte,$scope.msg,$scope.alertType);
          $timeout(function(){
            $scope.$emit('hideAlert',$scope);
          },3000);
        }else{
          $scope.tilte = '失败';
          $scope.msg= '登录失败！';
          $scope.alertType = 'alert-danger';
          $scope.$emit('showAlert',$scope.tilte,$scope.msg,$scope.alertType);
          $timeout(function(){
            $scope.$emit('hideAlert',$scope);
          },3000);
        }
      }).error(function(data){

      });

    };
  })
  .controller('registerCtrl',function($scope,$rootScope,$state,$timeout,registerService,$window){
      $scope.toLogin = function(){
        $scope.showflag = false;
        $timeout(function(){
          $state.go('login.lo');
        },100);
      };
      $scope.showflag = false;
      $timeout(function(){
          $scope.showflag = true;
      },100);
      $scope.user = {};
      $scope.register = function(){
        if(registerService.checkValues($scope)){
          var submitData = {};
          submitData.loginName = $scope.user.username;
          submitData.pass = $scope.user.password;
          submitData.name = $scope.user.username;
          registerService.register(submitData).success(function(data){
            var resData = data[0];
            if(resData.flag){
              $scope.tilte = '成功';
              $scope.msg= '注册成功！';
              $scope.alertType = 'alert-success';
              $scope.$emit('showAlert',$scope.tilte,$scope.msg,$scope.alertType);
              $timeout(function(){
                $scope.$emit('hideAlert',$scope);
              },3000);
            }else{
              $scope.tilte = '警告';
              $scope.msg= resData.msg;
              $scope.alertType = 'alert-danger';
              $scope.$emit('showAlert',$scope.tilte,$scope.msg,$scope.alertType);
              $timeout(function(){
                $scope.$emit('hideAlert',$scope);
              },3000);
            }
          }).error(function(err){
            console.log(err);
          });
        }else{
          $scope.$emit('showAlert',$scope.tilte,$scope.msg,$scope.alertType);
          $timeout(function(){
            $scope.$emit('hideAlert',$scope);
          },3000);
        }
      };
  });
