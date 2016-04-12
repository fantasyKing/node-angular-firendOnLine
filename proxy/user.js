var models = require('../models');
var User = models.User;
var utility = require('utility');

exports.insertUser = function(obj,callback){
  var user = new User({
    loginName:obj.loginName,
    pass:obj.pass
  });
  user.save(callback);
};

exports.getUserByName = function(name,callback){
  User.findOne({'loginName':name},{'loginName':1,_id:0},callback);
};
