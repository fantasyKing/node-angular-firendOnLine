///<reference path="D:\nodejs-workspace\nodejs\node-angular-FriendLine\typings\mongoose\mongoose.d.ts" />
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  name: {
    type: String
  },
  loginName: {
    type: String,
    required: true
  },
  pass: {
    type: String,
    required: true
  },
  title: {
    type: String
  },
  rooms: [{
    type: Schema.Types.ObjectId,
    ref: 'Room'
  }],
  friends: [{
    type: Schema.Types.ObjectId,
    ref: 'User'
  }],
  joined: {
    type: Date,
    default: Date.now
  }
});

mongoose.model('User', UserSchema);