var proxy = require('../proxy');
var _user = proxy.User;

exports.login = function(req,res,next){
  var user = req.body;
  _user.getUser(user,function(err,doc){
    if(err){
      return next(err);
    }
    if(doc){
      return res.json({
        errcode:0,
        errmsg:'',
        data:[{flag:true,msg:'登录成功！',data:doc}]
      });
    }else{
      return res.json({
        errcode:0,
        errmsg:'',
        data:[{flag:false,msg:'您还没有注册呢！'}]
      });
    }
  });
};
