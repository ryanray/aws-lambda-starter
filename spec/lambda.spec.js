var proxyquire = require('proxyquire');

describe('myLambda', function() {
  var lambda;
  var context;
  var libMock;

  beforeEach(function() {
    libMock = jasmine.createSpyObj('libMock', ['getMessage'])
    lambda = proxyquire('../lambda.js', {
      './lib/example.js': libMock
    });
    context = jasmine.createSpyObj('contextSpy', ['done', 'succeed', 'fail']);
  });

  it('should greet the world', function() {
    var evnt = {
      type: 'cruel'
    };

    libMock.getMessage.and.returnValue('Hello cruel world!');

    lambda.handler(evnt, context);

    expect(libMock.getMessage).toHaveBeenCalledWith('cruel');
    expect(context.succeed).toHaveBeenCalledWith('Hello cruel world!');
    expect(context.done).not.toHaveBeenCalled();
    expect(context.fail).not.toHaveBeenCalled();
  });

  it('should fail', function() {
    var evnt = {
      type: null
    };

    lambda.handler(evnt, context);

    expect(libMock.getMessage).not.toHaveBeenCalled();
    expect(context.succeed).not.toHaveBeenCalled();
    expect(context.done).not.toHaveBeenCalled();
    expect(context.fail).toHaveBeenCalledWith('No type provided!');
  });
});