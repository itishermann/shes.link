const express = require('express');
const app = express();

// Routes
const shorten = require("./routes/shorten");
const remove = require("./routes/remove");
const redirect = require("./routes/redirect");

app.use(express.json({}));

// Check for a heroku port
app.set('port', (process.env.PORT || 5000));


app.use("/",[express.static(__dirname + 'public'), redirect]);
app.use("/static", express.static(__dirname + 'assets'));
app.use("/api",[shorten, remove]);

if (process.env.NODE_ENV !== "test") {
  app.listen(app.get('port'), () => {
    console.log('listening on port ' + app.get('port'));
  });
} else {
  module.exports = app;
}




