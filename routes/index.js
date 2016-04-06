var express = require('express');
var path = require('path');
var router = express.Router();
var register = require('../controllers/register');

router.post('/register', function(req, res, next) {
  register.register(req,res,next);
});

module.exports = router;
