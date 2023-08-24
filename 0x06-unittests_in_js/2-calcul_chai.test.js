const { expect }= require('chai');
const calculateNumber = require('./2-calcul_chai.js');

describe('calculateNumber', function (done) {
  it('should return sum of two numbers.', function () {
    expect(calculateNumber('SUM', 1.4, 4.6)).to.equal(6);
    expect(calculateNumber('SUM', 1, 2)).to.equal(3);
  });


  it('should return subtract of two numbers', function () {
    expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
    expect(calculateNumber('SUBTRACT', 5, 5)).to.equal(0);
  });

  it('should return divide of two numbers', function () {
    expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
    expect(calculateNumber('DIVIDE', 10, 5)).to.equal(2);
  });

  it('should return "Error" string', function () {
    expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
  });
});
