/// <reference path="D:\nodejs-workspace\nodejs\node-angular-FriendLine\typings\tsd.d.ts" />
angular.module('myApp.service')
  .factory('userSaveService', function($http, alertService, $state, $timeout) {
    var _user = {};
    $http.get('/checkLogin', {
      cache: true
    }).success(function(data) {
      var result = data[0];
      if (result.flag) {
        _user = result.data;
      } else {
        var option = {
          title: '警告',
          msg: '您还没有登录，请重新登录！',
          alertShow: true,
          alertType: 'alert-danger'
        };
        alertService.setOption(option);
        $timeout(function() {
          $state.go('login.lo');
        }, 2000);
      }
    }).error(function(data) {
      _user = {};
    })
    return {
      save: function(user) {
        _user = user;
      },
      getUser: function() {
        return _user;
      }
    };
  });