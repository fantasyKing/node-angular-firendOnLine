/// <reference path="D:\nodejs-workspace\nodejs\node-angular-FriendLine\typings\tsd.d.ts" />
var express = require('express');
var router = express.Router();

router.get('/user', function(req, res, next) {
    return res.json({
        errcode: 0,
        errmsg: '',
        data: [{
            flag: true,
            msg: '退出成功',
        }]
    });
});

module.exports = router;