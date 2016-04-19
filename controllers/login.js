var proxy = require('../proxy');
var _user = proxy.User;

exports.login = function(req, res, next) {
  var user = req.body;
  _user.getUser(user, function(err, doc) {
    if (err) {
      return next(err);
    }
    if (doc) {
      req.session.user = doc;
      return res.json({
        errcode: 0,
        errmsg: '',
        data: [{
          flag: true,
          msg: '登录成功！',
          data: doc
        }]
      });
    } else {
      return res.json({
        errcode: 0,
        errmsg: '',
        data: [{
          flag: false,
          msg: '您还没有注册呢！'
        }]
      });
    }
  });
};

exports.getUserInSession = function(req, res, next) {
  if (req.session.user) {
    return res.json({
      errcode: 0,
      errmsg: '',
      data: [{
        flag: true,
        msg: '',
        data: req.session.user
      }]
    });
  } else {
    return res.json({
      errcode: 0,
      errmsg: '',
      data: [{
        flag: false,
        msg: '断开登录了',
      }]
    });
  }
}