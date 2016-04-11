var proxy = require('../proxy');
var _user = proxy.User;
var util = require('util');

exports.register = function(req,res,next){
  var user = req.body;
  _user.insertUser(user,function(err,doc){
    if(err){
      return next(err);
    }
    req.session.user = doc;
    return res.json({
      'errcode':0,
      'errmsg':'',
      'data':[doc]
    });
  });
};

exports.getUserByName = function(req,res,next){
  var loginname = req.body.loginname;
  _user.getUserByName(loginname,function(err,doc){
    if(err){
      return next(err);
    }
    console.log('getUserByName方法返回：');
    console.log(doc);
    return res.json({
      'errcode':0,
      'errmsg':'',
      'data':[doc]
    });
  });
};
