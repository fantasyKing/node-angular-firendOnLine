angular.module('myApp.controller',[])
  .controller('loginCtrl',function($state){

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
  .controller('registerCtrl',function($scope,$state,$timeout,registerService,$window){
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
        registerService.register($scope.user).success(function(data){
          if(data[0] && data[0]!='null'){
            $window.alert('注册成功！');
          }else{
            $window.alert('注册失败！');
          }
        }).error(function(err){
          console.log(err);
        });
      };
  });
