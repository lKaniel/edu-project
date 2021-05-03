let createError = require('http-errors');
let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan');

let addPostRouter = require("./routes/addPost");
let removePostRouter = require("./routes/removePost");
let getPostRouter = require("./routes/getPost");
let getPostsRouter = require("./routes/getPosts");
let addTextTabRouter = require("./routes/addTextTab");
// let addImgTabRouter = require("./routes/addImgTab");
let removeTabRouter = require("./routes/removeTab");

const {createTables} = require("./core/db/generalController");

let app = express();

createTables();



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(function (req, res, next) {
  /*var err = new Error('Not Found');
   err.status = 404;
   next(err);*/

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', '*');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers,X-Access-Token,XKey,Authorization');

//  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

  // Pass to next layer of middleware
  next();
});

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use("/addpost", addPostRouter);
app.use("/removepost", removePostRouter);
app.use("/getpost", getPostRouter);
app.use("/getposts", getPostsRouter);
app.use("/addtexttab", addTextTabRouter);
// app.use("/addimgtab", addImgTabRouter);
app.use("/removetab", removeTabRouter);

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
