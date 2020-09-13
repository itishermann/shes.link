const express = require('express');
const app = express();

// Check for a heroku port
app.set('port', (process.env.PORT || 5000));


// Listen on assigned port
app.listen(app.get('port'), function () {
  console.log('listening on port ' + app.get('port'));
});
