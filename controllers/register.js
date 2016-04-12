var proxy = require('../proxy');
var _user = proxy.User;
var util = require('util');

exports.register = function(req,res,next){
  var user = req.body;
  _user.getUserByName(user.loginName,function(err,doc){
    if(err){
      return next(err);
    }
    if(doc){
      return res.json({
        'errcode':0,
        'errmsg':'',
        'data':[{'flag':false,'msg':'这么巧，有人叫这个名字了'}]
      });
    }else{
      _user.insertUser(user,function(err,doc){
        if(err){
          console.log('插入user报错');
          return next(err);
        }
        req.session.user = doc;
        return res.json({
          'errcode':0,
          'errmsg':'',
          'data':[{'flag':true,'msg':'注册成功！','data':doc}]
        });
      });
    }
  });
};

exports.getUserByName = function(req,res,next){
  var loginName = req.body.loginName;
  _user.getUserByName(loginName,function(err,doc){
    if(err){
      return next(err);
    }
    var result = {
      errcode:0,
      errmsg:'',
      data:[doc]
    };
    return res.json(result);
  });
};
