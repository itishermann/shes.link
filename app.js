const express = require('express');
const app = express();

// Routes
const shorten = require("./routes/shorten");
const long = require("./routes/long");
const remove = require("./routes/remove");
const redirect = require("./routes/redirect");

app.use(express.json({}));

// Check for a heroku port
app.set('port', (process.env.PORT || 5000));

const db = pg(process.env.DATABASE_URL || 'postgres://psql:psql@localhost');

app.use("/",[express.static(__dirname + 'public'), redirect]);
app.use("/static", express.static(__dirname + 'assets'));
app.use("/api",[shorten, remove]);

// Listen on assigned port
app.listen(app.get('port'), function () {
  console.log('listening on port ' + app.get('port'));
});



