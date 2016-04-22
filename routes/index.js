/// <reference path="D:\nodejs-workspace\nodejs\node-angular-FriendLine\typings\tsd.d.ts" />
var express = require('express');
var path = require('path');
var router = express.Router();
var api = require('./api');

var register = require('../controllers/register');
var login = require('../controllers/login');

router.get('/', function(req, res, next) {
  res.sendFile(path.join(__dirname, '/public/index.html'));
});

router.post('/register', function(req, res, next) {
  register.register(req, res, next);
});

router.post('/checkByLoginname', function(req, res, next) {
  register.getUserByName(req, res, next);
});

router.post('/login', function(req, res, next) {
  login.login(req, res, next);
});

router.get('/checkLogin', function(req, res, next) {
  login.getUserInSession(req, res, next);
});

router.get('/loginout', function(req, res, next) {
  login.loginout(req, res, next);
});

router.use('/api', api);

//没有匹配的路由，有err参数应该不会走这个中间件了
router.use(function(req, res, next) {
  console.log('没有找到路由' + req.url);
  next();
});

module.exports = router;