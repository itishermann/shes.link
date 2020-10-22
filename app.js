const express = require('express');
const favicon = require('serve-favicon');
const path = require('path');
const createError = require('http-errors');

const app = express();

const shorten = require("./routes/shorten");
const remove = require("./routes/remove");
const redirect = require("./routes/redirect");

app.use(express.json({}));
if(process.env.NODE_ENV !== 'production'){ 
  const logger = require('morgan');
  app.use(logger('dev')); 
}

app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))
app.use("/",redirect);
app.use("/api",[shorten, remove]);

app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  if (err.status === 404 ) return res.sendFile('/public/404.html', {root: __dirname });
  if (err.status === 403 ) return res.sendFile('/public/403.html', {root: __dirname });
  return res.sendFile('/public/404.html', {root: __dirname });
});

app.listen(process.env.PORT, () => {
  console.log('listening on port ' + process.env.PORT);
});

module.exports = app;
