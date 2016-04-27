///<reference path="D:\nodejs-workspace\nodejs\node-angular-FriendLine\typings\mongoose\mongoose.d.ts" />
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var RoomSchema = new Schema({
    owner: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    name: {
        type: String
    },
    created: {
        type: Date,
        default: Date.now
    },
    messages: [{
        type: Schema.Types.ObjectId,
        ref: 'Message'
    }],
    participants: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }]
});

mongoose.model('Room', RoomSchema);