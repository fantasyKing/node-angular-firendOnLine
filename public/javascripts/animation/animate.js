angular.module('myApp.animation',[])
  .animation('.slide',function(){
    return{
      enter:function(element,done){
        jQuery(element)
        .animate({
          width:'300px',
          left:'150px'
        },100,done);
      },
      leave:function(element,done){
        jQuery(element)
        .animate({
          width:'0px',
          left:'600px'
        },100,done);
      }
    };
  })
  .animation('.mybounce',function(){
    return{
      enter:function(element,done){
        element.addClass('animated bounceInRight').once('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',function(){
          element.removeClass('animated bounceInRight');
        });
      },
      leave:function(element,done){
        element.addClass('animated bounceOutRight').once('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',function(){
          element.removeClass('animated bounceOutRight');
        });
      }
    };
  });
