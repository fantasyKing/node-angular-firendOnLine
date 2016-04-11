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
  .controller('loginloCtrl',function($scope,$state,$timeout){
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
          registerService.register($scope.user).success(function(data){
            if(data[0] && data[0]!='null'){
              $window.alert('注册成功！');
            }else{
              $window.alert('注册失败！');
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
