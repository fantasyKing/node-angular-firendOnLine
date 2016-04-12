angular.module('myApp.directive',[])
  .directive('myCheckregister',function(registerService){
    return {
      restrict: 'A',
      require: 'ngModel',
      link:function(scope,element,attrs,ctrl){
        ctrl.$repeat = false;
        element.bind('change',function(e){
          var loginName = scope.user.username;
          if(loginName){
            registerService.checkByLoginname({'loginName':loginName}).success(function(data){
              if(data[0] && data[0] != 'null'){
                ctrl.$repeat = true;
                element.parent().parent().removeClass('has-success');
                element.parent().parent().addClass('has-error');
              }else{
                ctrl.$repeat = false;
                element.parent().parent().removeClass('has-error');
                element.parent().parent().addClass('has-success');
              }
            }).error(function(data){
              console.log('出错了');
            });
          }else{
            scope.$apply(function(){ctrl.$repeat = false;});
          }
        });
      }
    };
  })
  .directive('myPassvalidate',function(){
    return{
      restrict: 'A',
      require: 'ngModel',
      link: function(scope,element,attrs,ctrl){
        ctrl.$equal = false;
        element.bind('change',function(e){
          e.preventDefault();
          var pass = scope.user.password;
          var repeatpass = scope.user.repeatpass;
          scope.$apply(function(){
            if(pass && repeatpass){
              if(pass !== repeatpass){
                ctrl.$equal = true;
                element.parent().parent().removeClass('has-success');
                element.parent().parent().addClass('has-error');
              }else{
                ctrl.$equal = false;
                element.parent().parent().removeClass('has-error');
                element.parent().parent().addClass('has-success');
              }
            }
            if(!repeatpass){
              ctrl.$equal = false;
            }
          });
        });
      }
    };
  })
  .directive('myRequired',function(){
    return{
      restrict: 'A',
      require: 'ngModel',
      link: function(scope,element,attrs,ctrl){
        ctrl.$focused = false;
        element.bind('focus', function(evt) {
          scope.$apply(function() {ctrl.$focused = true;});
      }).bind('blur', function(evt) {
          scope.$apply(function() {ctrl.$focused = false;});
          if(ctrl.$error.required && ctrl.$dirty){
            element.parent().parent().removeClass('has-success');
            element.parent().parent().addClass('has-error');
          }else{
            element.parent().parent().removeClass('has-error');
            element.parent().parent().addClass('has-success');
          }
      });
      }
    };
  });
