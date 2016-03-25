angular.module('myApp.controller',[])
  .controller('loginCtrl',function($http){
    $http({method: 'GET', url: '/test'}).
   success(function(data, status, headers, config) {
    console.log(data);
   }).
   error(function(data, status, headers, config) {
    console.log('发生所悟');
   });
  });
