angular.module('myApp.animation',[])
  .animation('.slide',function(){
    return{
      enter:function(element,done){
        console.log("enter方法执行了");
        jQuery(element)
        .animate({
          width:'300px',
          left:'150px'
        },100,done);
      },
      move:function(element,done){
        console.log("move方法执行了");
         jQuery(element).fadeIn(1000, done);
      },
      leave:function(element,done){
        console.log('leave方法执行了');
        jQuery(element)
        .animate({
          width:'0px',
          left:'600px'
        },100,done);
      }
    };
  });
