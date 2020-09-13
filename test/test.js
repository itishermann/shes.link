'use strict';

require('mocha');
const app = require('../app');
app.listen(process.env.PORT);

describe('\n--- FUNCTIONS ---\n', function () {
  require('./functions')();
});

describe('\n--- ROUTES ---\n', function () {
  require('./routes')();
});

