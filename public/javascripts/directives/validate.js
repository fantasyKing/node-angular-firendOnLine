angular.module('myApp.directive',[])
  .directive('myValidate',function(registerService){
    return {
      restrict: 'A',
      require: 'ngModel',
      link:function(scope,element,attrs,ctrl){
        ctrl.$focused = false;
        ctrl.$repeated = false;
        element.bind('focus', function(evt) {
          scope.$apply(function() {ctrl.$focused = true;});
            element.parent().parent().removeClass('has-error');
            element.parent().parent().addClass('has-success');
        }).bind('blur', function(evt) {
          scope.$apply(function() {ctrl.$focused = false;});
          if(ctrl.$error.required && ctrl.$dirty){
            element.parent().parent().removeClass('has-success');
            element.parent().parent().addClass('has-error');
          }else{
            var formname = ctrl.$$parentForm.$name;
            if(formname === 'registerForm' && ctrl.$name === 'username'){
              var user = scope.user;
              if(user.username){
                registerService.checkByLoginname({loginname:user.username}).success(function(data){
                  if(data[0] && data[0] != 'null'){
                    ctrl.$repeated =true;
                    element.parent().parent().removeClass('has-success');
                    element.parent().parent().addClass('has-error');
                  }
                }).error(function(data){
                  console.log('出错了');
                  ctrl.$repeated = false;
                });
              }
            }
          }
        });
      }
    };
  });
