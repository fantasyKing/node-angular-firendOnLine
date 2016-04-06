angular.module('myApp.directive',[])
  .directive('myValidate',function(){
    return {
      restrict: 'A',
      // require: 'ngModel',
      link:function(scope,element,attrs){
        // ctrl.$focused = false;
        // $(element).css('color','red');
        element.css({'color':'blue','width':'500px'});
        // element.bind('focus', function(evt) {
        //   // scope.$apply(function() {ctrl.$focused = true;});
        //   element.removeClass('has-success');
        // }).bind('blur', function(evt) {
        //   // scope.$apply(function() {ctrl.$focused = false;});
        //   element.css('color','red');
        // });
      }
    };
  });
