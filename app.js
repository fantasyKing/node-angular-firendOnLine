var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var MongoStore = require('connect-mongo')(session);
var settings = require('./settings');

var routes = require('./routes/index');

var fs = require('fs');
var accessLog = fs.createWriteStream('access.log',{flags:'a'});

var app = express();

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
// app.engine('html', require('ejs').renderFile);
// app.set('view engine', 'html');

app.use(favicon(path.join(__dirname, 'public', 'images','fav.png')));
app.use(logger('dev'));
app.use(logger({stream:accessLog}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
  secret : settings.cookieSecret,
  key : settings.db,
  cookie : {maxAge : 1000*60*60*24},
  store : new MongoStore({
    url: settings.url,
  }),
  resave: settings.resave,
  saveUninitialized : settings.saveUninitialized
}));

app.use('/', routes);

app.use(function(req, res, next) {
  console.log('进入了404');
  var err = new Error('请求找不到了');
  err.status = 404;
  next(err);
});

if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    console.log('开发环境为development');
    res.status(err.status || 500);
    console.log(err.message);
    res.json({
      'errcode': 1,
      'errmsg':err.message
    });
  });
}

app.use(function(err, req, res, next) {
  console.log('最后返回错误');
  res.status(err.status || 500);
  res.json({
    'errcode': 1,
    'errmsg':err.message
  });
});

module.exports = app;
