var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors')


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var createAccount = require('./routes/createaccount');
var loginHandler = require('./routes/login');
var addProperty = require('./routes/addproperty');
var getProperty = require('./routes/getproperty');
var bookProperty = require('./routes/bookproperty');
var getBooking = require('./routes/getbookings');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors())

app.use('/', indexRouter);
app.use('/user-details', usersRouter);
app.use('/create-account',createAccount);
app.use('/login',loginHandler)
app.use('/add-property',addProperty)
app.use('/get-property',getProperty)
app.use('/book-property',bookProperty)
app.use('/get-booking',getBooking)
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
