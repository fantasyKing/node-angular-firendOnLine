angular
  .module('myApp', [
    'myApp.controller',
    'myApp.service',
    'myApp.animation',
    'myApp.directive',
    'ui.router',
    'ngAnimate'
  ])
  .run(function($state) {
    console.log('.run方法执行了');
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
        templateUrl: '/pages/main.html',
        controller: 'mainCtrl'
      });

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