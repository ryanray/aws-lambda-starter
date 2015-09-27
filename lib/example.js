// Example lib file that gets bundled with your Lambda.

module.exports = {
  getMessage: function(type) {
    return 'Hello ' + type + ' world!';
  }
};
