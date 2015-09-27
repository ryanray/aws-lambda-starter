var lambda = require('../lambda.js');
var mockEvent = require('./localEvent.json');

lambda.handler(mockEvent, {
  succeed: function(result) {
    console.log('[SUCCEED] ', result);
  },
  fail: function(result) {
    console.log('[FAIL] ', result);
  }
});
