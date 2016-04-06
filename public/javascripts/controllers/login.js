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
  .controller('registerCtrl',function($scope,$state,$timeout,registerService){
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
          console.log(data);
        }).error(function(err){
          console.log(err);
        });
      };
  });
