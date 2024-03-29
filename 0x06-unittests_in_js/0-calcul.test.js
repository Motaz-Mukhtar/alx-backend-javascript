const assert = require('assert');
const calculateNumber = require('./0-calcul.js');

describe('calculateNumber', function () {
  it('should return sum of two numbers.', function () {
    assert.equal(calculateNumber(1, 3), 4);
    assert.equal(calculateNumber(5, 2), 7);
  });

  it('should return sum of round numbers', function () {
    assert.equal(calculateNumber(1.2, 3.7), 5);
    assert.equal(calculateNumber(1.5, 3.7), 6);
  })
});
