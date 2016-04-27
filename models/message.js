///<reference path="D:\nodejs-workspace\nodejs\node-angular-FriendLine\typings\mongoose\mongoose.d.ts" />
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var messageSchema = new Schema({
    owner: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    room: {
        type: Schema.Types.ObjectId,
        ref: 'Room',
        required: true
    },
    text: {
        type: String,
        required: true
    },
    posted: {
        type: Date,
        default: Date.now,
    }
});

mongoose.model('Message', messageSchema);