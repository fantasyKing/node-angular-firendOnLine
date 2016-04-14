angular.module('myApp.directive')
  .directive('myNavBar',function(){
    return{
      restrict: 'E',
      replace: true,
      scope:{
        barShowFlag:'=',
        barTitle:'=',
        barUserImage:'=',
        barUsername:'=',
        barBtnMsg:'=',
      },
      templateUrl:'/template/navbar.html',
      link:function(scope,elemtent,attrs){

      }
    };
  });
