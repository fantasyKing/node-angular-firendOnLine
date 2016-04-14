angular.module('myApp.controller')

  .controller('indexCtrl',function(barService,$scope){
    barService.setScope($scope);
    var option = {
      flag:false
    };
    barService.setOption(option);
  })

  .controller('mainCtrl',function(barService,userSaveService){
    var user = userSaveService.getUser();
    var option = {
      flag:true,
      img:'/images/lufei.jpg',
      username:user.name,
      title:user.title||'这个家伙很懒，什么都没有留下！',
      btnmsg:'退  出'
    };
    barService.setOption(option);

  });
