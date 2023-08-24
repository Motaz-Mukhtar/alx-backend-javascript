const assert = require('assert');
const calculateNumber = require('./1-calcul.js');

describe('calculateNumber', function (done) {
  it('should return sum of two numbers.', function () {
    assert.equal(calculateNumber('SUM', 1.4, 4.5), 6);
    assert.equal(calculateNumber('SUM', 1, 2), 3);
  });


  it('should return subtract of two numbers', function () {
    assert.equal(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
    assert.equal(calculateNumber('SUBTRACT', 5, 5), 0);
  });

  it('should return divide of two numbers', function () {
    assert.equal(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
    assert.equal(calculateNumber('DIVIDE', 10, 5), 2);
  });

  it('should return "Error" string', function () {
    assert.equal(calculateNumber('DIVIDE', 1.4, 0), 'Error');
  });
});
