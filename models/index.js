var mongoose = require('mongoose');
var settings = require('../settings');

mongoose.connect(settings.url, {
  server: {
    poolsize: settings.poolsize
  }
}, function(err) {
  if (err) {
    console.log("数据库打开错误！");
    console.log(err);
    process.exit();
  }
});

require('./user');
require('./rooms');
require('./message');

exports.User = mongoose.model('User');
exports.Room = mongoose.model('Room');
exports.Message = mongoose.model('Message');