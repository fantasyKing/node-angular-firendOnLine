var express = require('express');
var path = require('path');
var router = express.Router();
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
//没有匹配的路由，有err参数应该不会走这个中间件了
router.use(function(req, res, next) {
  console.log(req.url);
  console.log('没有找到路由');
  next();
});

module.exports = router;