var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// config
import config from './config/global';
import configJWT from './config/jwt';

// 3rd party middleware
import cors from 'cors';
import jwt from 'express-jwt';
import helmet from 'helmet';
import bodyParser from 'body-parser';

// code
import middleware from './src/middleware';
import api from './src/api';
import webapp from './src/controllers';

var app = express();

// use cors
app.use(cors(config.cors));

// use helmet
app.use(helmet());

// body-parser
app.use(bodyParser.json({
  limit: config.bodyLimit
}));


// view engine setup
app.set('views', path.join(__dirname + '/src', 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// internal middleware
app.use(middleware({ config }));

// api router
app.use('/api', jwt(configJWT).unless(configJWT), api({ config }));

// web application router
app.use('/', webapp({ config }));

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
