/// <reference path="D:\nodejs-workspace\nodejs\node-angular-FriendLine\typings\tsd.d.ts" />
angular.module('myApp.controller', [])
  .controller('loginCtrl', function($scope, $rootScope, $state, barService) {

    barService.setOption({
      flag: false
    });
  })
  .controller('loginloCtrl', function($scope, $state, $timeout, loginService, userSaveService, leftbarService, alertService) {
    $scope.goRegister = function() {
      $scope.showflag = false;
      $timeout(function() {
        $state.go('login.register');
      }, 110);
    };
    $scope.showflag = false;
    $timeout(function() {
      $scope.showflag = true;
    }, 100);
    $scope.user = {};
    $scope.login = function() {
      var data = {};
      data.loginName = $scope.user.username;
      data.pass = $scope.user.password;
      loginService.login(data).success(function(data) {
        var result = data[0];
        if (result.flag) {
          userSaveService.save(result.data);
          var option = {
            title: '成功',
            msg: '登录成功！',
            alertType: 'alert-success',
            alertShow: true
          };
          alertService.setOption(option);
          leftbarService.setOption({
            state: 'sy'
          });
          $state.go('main.sy');
        } else {
          var option = {
            title: '失败',
            msg: result.msg,
            alertType: 'alert-danger',
            alertShow: true
          };
          alertService.setOption(option);
        }
      }).error(function(data) {

      });

    };
  })
  .controller('registerCtrl', function(alertService, $scope, $rootScope, $state, $timeout, registerService, $window) {
    $scope.toLogin = function() {
      $scope.showflag = false;
      $timeout(function() {
        $state.go('login.lo');
      }, 100);
    };
    $scope.showflag = false;
    $timeout(function() {
      $scope.showflag = true;
    }, 100);
    $scope.user = {};
    $scope.register = function() {
      if (registerService.checkValues($scope)) {
        var submitData = {};
        submitData.loginName = $scope.user.username;
        submitData.pass = $scope.user.password;
        submitData.name = $scope.user.username;
        registerService.register(submitData).success(function(data) {
          var resData = data[0];
          if (resData.flag) {
            var option = {
              title: '成功',
              msg: '注册成功！',
              alertType: 'alert-success',
              alertShow: true
            };
            alertService.setOption(option);
          } else {
            var option = {
              title: '警告',
              msg: resData.msg,
              alertType: 'alert-danger',
              alertShow: true
            };
            alertService.setOption(option);
          }
        }).error(function(err) {
          console.log(err);
        });
      } else {
        var option = {
          title: $scope.tilte,
          msg: $scope.msg,
          alertType: $scope.alertType,
          alertShow: true
        };
        alertService.setOption(option);
      }
    };
  });