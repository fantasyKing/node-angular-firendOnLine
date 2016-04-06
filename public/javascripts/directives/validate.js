angular.module('myApp.directive',[])
  .directive('myValidate',function(){
    return {
      restrict: 'A',
      require: 'ngModel',
      link:function(scope,element,attrs,ctrl){
        ctrl.$focused = false;
        element.bind('focus', function(evt) {
          scope.$apply(function() {ctrl.$focused = true;});
            element.parent().parent().removeClass('has-error');
            element.parent().parent().addClass('has-success');
        }).bind('blur', function(evt) {
          scope.$apply(function() {ctrl.$focused = false;});
          if(ctrl.$error.required && ctrl.$dirty){
            element.parent().parent().removeClass('has-success');
            element.parent().parent().addClass('has-error');
          }
        });
      }
    };
  });
