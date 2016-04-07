var proxy = require('../proxy');
var _user = proxy.User;
var util = require('util');

exports.register = function(req,res,next){
  var user = req.body;
  _user.insertUser(user,function(err,product){
    if(err){
      return next(err);
    }
    req.session.user = product;
    res.json({
      'errcode':0,
      'errmsg':'注册成功',
      'data':[product]
    });
  });
};
