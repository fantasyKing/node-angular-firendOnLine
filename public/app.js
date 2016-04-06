angular
  .module('myApp', [
    'myApp.controller',
    'myApp.animation',
    'myApp.directive',
    'ui.router',
    'ngAnimate'
  ])
  .run(function($state){
    console.log('.run方法执行了');
  })
  .config(function($stateProvider,$urlRouterProvider){
    $stateProvider
      .state('login',{
        url:'/login',
        abstract: true,
        templateUrl: '/pages/login.html',
        controller: 'loginCtrl'
      })
      .state('login.lo',{
        url:'/loginlo',
        templateUrl: '/pages/login-lo.html',
        controller: 'loginloCtrl'
      })
      .state('login.register',{
        url:'/register',
        templateUrl: '/pages/login-register.html',
        controller: 'registerCtrl'
      });

      $urlRouterProvider.otherwise('/login/loginlo');
  });
