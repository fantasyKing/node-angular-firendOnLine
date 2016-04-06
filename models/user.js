var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var utility = require('utility');

var UserSchema = new Schema({
  name: { type:String},
  loginName:{ type:String,required:true},
  pass:{ type:String,required:true},
  opptime:{ type:Date, default:Date.now}
});

mongoose.model('User',UserSchema);
