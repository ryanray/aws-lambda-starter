var lib = require('./lib/example.js');

// Entrypoint for AWS Lambda
exports.handler = function(event, context) {
  if(event.type) {
    return context.succeed(lib.getMessage(event.type));
  }
  return context.fail('No type provided!');
};
