angular.module('myApp.service')
  .factory('barService',function(){
    var scope = {};
    return {
      setScope:function(sc){
        scope = sc;
      },
      setOption:function(option){
        if(option.hasOwnProperty('flag')){
          scope.barShowFlag = option.flag;
        }
        if(option.hasOwnProperty('title')){
          scope.barTitle = option.title;
        }
        if(option.hasOwnProperty('img')){
          scope.barUserImage = option.img;
        }
        if(option.hasOwnProperty('username')){
          scope.barUsername = option.username;
        }
        if(option.hasOwnProperty('btnmsg')){
          scope.barBtnMsg = option.btnmsg;
        }
      }
    };
  });
