var models = require('../models');
var User = models.User;
var utility = require('utility');

exports.insertUser = function(obj,callback){
  var user = new User({
    loginName:obj.username,
    pass:obj.password
  });
  user.save(callback);
};

exports.getUserByName = function(name,callback){
  User.findOne({'loginName':name},{'loginName':1,_id:0},callback);
};
