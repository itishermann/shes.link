'use strict';

require('mocha');
require("../app");

describe('\n--- FUNCTIONS ---\n', function () {
  require('./functions')();
});

describe('\n--- ROUTES ---\n', function () {
  require('./routes')();
});

