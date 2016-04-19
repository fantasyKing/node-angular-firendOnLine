/// <reference path="D:\nodejs-workspace\nodejs\node-angular-FriendLine\typings\tsd.d.ts" />
angular
  .module('myApp', [
    'myApp.controller',
    'myApp.service',
    'myApp.animation',
    'myApp.directive',
    'ui.router',
    'ngAnimate'
  ])
  .run(function($state, userSaveService) {
    console.log('.run方法执行了');
    var user = userSaveService.getUser();
  })
  .config(function($stateProvider, $urlRouterProvider, $httpProvider) {
    $stateProvider
      .state('login', {
        url: '/login',
        abstract: true,
        templateUrl: '/pages/login.html',
        controller: 'loginCtrl'
      })
      .state('login.lo', {
        url: '/loginlo',
        templateUrl: '/pages/login-lo.html',
        controller: 'loginloCtrl'
      })
      .state('login.register', {
        url: '/register',
        templateUrl: '/pages/login-register.html',
        controller: 'registerCtrl'
      })
      .state('main', {
        url: '/main',
        abstract: true,
        templateUrl: '/pages/main.html',
        controller: 'mainCtrl'
      })
      .state('main.sy', {
        url: '/main/sy',
        templateUrl: '/pages/sy.html',
        controller: 'syCtrl'
      })
      .state('main.ywxg', {
        url: '/main/ywxg',
        templateUrl: '/pages/ywxg.html',
        controller: 'ywxgCtrl'
      })
      .state('main.chat', {
        url: '/main/chat',
        templateUrl: '/pages/chat.html',
        controller: 'chatCtrl'
      })
      .state('main.picture', {
        url: '/main/picture',
        templateUrl: '/pages/picture.html',
        controller: 'pictureCtrl'
      })
      .state('main.grxx', {
        url: '/main/grxx',
        templateUrl: '/pages/grxx.html',
        controller: 'grxxCtrl'
      })


    $urlRouterProvider.otherwise('/login/loginlo');
    $httpProvider.defaults.transformResponse.push(function(response) {
      if (response.hasOwnProperty('errcode')) {
        if (response.errcode !== 0) {
          throw response;
        } else {
          return response.data;
        }
      } else {
        return response;
      }
    });
    $httpProvider.interceptors.push('myHttpIntercepter');
  });