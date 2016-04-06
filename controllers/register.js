var proxy = require('../proxy');
var _user = proxy.User;
var util = require('util');

exports.register = function(req,res,next){
  var user = req.body;
  _user.insertUser(user,function(err,product){
    if(err){
       next(err);
    }
    req.session.user = product.loginName;
    res.json({msg:'注册成功'});
  });
};
