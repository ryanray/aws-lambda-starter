describe('getMessage', function() {
  var lib;

  beforeEach(function() {
    lib = require('../../lib/example.js');
  });

  it('should greet my type of world', function() {
    expect(lib.getMessage('my awesomesauce')).toBe('Hello my awesomesauce world!');
  });
});