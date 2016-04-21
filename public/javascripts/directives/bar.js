angular.module('myApp.directive')
  .directive('myNavBar', function(loginoutService, $state, alertService, userSaveService) {
    return {
      restrict: 'E',
      replace: true,
      scope: {
        barShowFlag: '=',
        barTitle: '=',
        barUserImage: '=',
        barUsername: '=',
        barBtnMsg: '=',
      },
      templateUrl: '/template/navbar.html',
      link: function(scope, elemtent, attrs, ctrls) {
        elemtent.find('button').bind('click', function() {
          loginoutService.loginout().success(function(data) {
            var resulst = data[0];
            if (resulst.flag) {
              var option = {
                title: '成功',
                msg: '退出成功！',
                alertType: 'alert-success',
                alertShow: true
              };
              alertService.setOption(option);
              userSaveService.save({});
              $state.go('login.lo');
            } else {
              var option = {
                title: '失败',
                msg: data.msg,
                alertType: 'alert-danger',
                alertShow: true
              };
              alertService.setOption(option);
            }
          }).error(function() {
            var option = {
              title: '失败',
              msg: '退出失败！',
              alertType: 'alert-danger',
              alertShow: true
            };
            alertService.setOption(option);
          });
        });
      }
    };
  });