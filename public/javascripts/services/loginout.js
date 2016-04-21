/// <reference path="D:\nodejs-workspace\nodejs\node-angular-FriendLine\typings\tsd.d.ts" />
angular.module('myApp.service')
    .factory('loginoutService', function($http) {
        return {
            loginout: function() {
                return $http.get('/loginout');
            }
        }
    })