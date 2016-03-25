angular
  .module('myApp', [
    'myApp.controller',
    'ui.router'
  ])
  .run(function(){
    console.log('.run方法执行了');
  })
  .config(function($stateProvider,$urlRouterProvider){
    $stateProvider
      .state('login',{
        url:'/login',
        templateUrl: '/pages/login.html',
        controller: 'loginCtrl'
      });
      $urlRouterProvider.otherwise('/login');
  });
