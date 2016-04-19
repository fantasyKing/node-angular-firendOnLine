/// <reference path="D:\nodejs-workspace\nodejs\node-angular-FriendLine\typings\tsd.d.ts" />
angular.module('myApp.service')
  .factory('userSaveService', function($http) {
    var _user = {};
    $http.get('/checkLogin', {
      cache: true
    }).success(function(data) {
      var result = data[0];
      if (result.flag) {
        _user = result.data;
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