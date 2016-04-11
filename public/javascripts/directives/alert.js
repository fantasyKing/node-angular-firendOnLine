angular.module('myApp.directive')
  .directive('alert',function(){
    return {
      restrict: 'E',
      replace: true,
      scope:{
        title:'=',
        msg:'=',
        alertShow:'=',
        alertType:'='
      },
      templateUrl:'/template/alert.html',
      link: function(scope,element,attrs){
        element.addClass(attrs.alertType);
      }
  };
  });
