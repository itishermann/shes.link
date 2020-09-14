const express = require('express');
const app = express();

const shorten = require("./routes/shorten");
const remove = require("./routes/remove");
const redirect = require("./routes/redirect");

app.use(express.json({}));

app.use("/",[express.static(__dirname + 'public'), redirect]);
app.use("/static", express.static(__dirname + 'assets'));
app.use("/api",[shorten, remove]);

app.listen(process.env.PORT, () => {
  console.log('listening on port ' + process.env.PORT);
});

module.exports = app;



