angular.module('myApp.controller')

.controller('indexCtrl', function(barService, alertService, $scope) {
  barService.setScope($scope);
  var option = {
    flag: false
  };
  barService.setOption(option);
  alertService.setScope($scope);
  var option = {
    alertShow: false
  };
  alertService.setOption(option);
})

.controller('mainCtrl', function(barService, userSaveService, $timeout, $scope, leftbarService) {
  var user = userSaveService.getUser();
  var option = {
    flag: true,
    img: '/images/lufei.jpg',
    username: user.name,
    title: user.title || '这个家伙很懒，什么都没有留下！',
    btnmsg: '退  出'
  };
  barService.setOption(option);
  leftbarService.setScope($scope);

  var option_ = {
    chatIndex: 0,
    commentIndex: 0
  }

  leftbarService.setOption(option_);
});