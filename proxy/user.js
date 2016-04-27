var models = require('../models');
var User = models.User;
var utility = require('utility');

exports.insertUser = function(obj, callback) {
  var user = new User({
    name: obj.loginName,
    loginName: obj.loginName,
    pass: utility.md5(obj.pass)
  });
  user.save(callback);
};

exports.getUserByName = function(name, callback) {
  User.findOne({
    'loginName': name
  }, {
    'loginName': 1,
    _id: 0
  }, callback);
};

exports.getUser = function(obj, callback) {
  User.findOne({
    'loginName': obj.loginName,
    'pass': utility.md5(obj.pass)
  }, {
    'joined': 0,
    'rooms': 0,
    'friends': 0
  }, callback);
};