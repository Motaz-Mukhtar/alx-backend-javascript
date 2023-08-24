const sendPaymentRequestToApi = require('./4-payment.js');
const Utils = require('./utils.js');
const { expect } = require('chai');
const sinon = require('sinon');

describe('sendPaymentRequestToApi', function () { 
  const consoleSpy = sinon.spy(console, 'log');

  it('validate usage of calculageNumber', function () {
    const utilsStub = sinon.stub(Utils, 'calculateNumber').returns(10);

    sendPaymentRequestToApi(100, 20);

    expect(utilsStub.alwaysReturned(10)).to.be.true;
    expect(consoleSpy.calledWith('The total is: 10')).to.be.true;
    expect(utilsStub.calledWith('SUM', 100, 20)).to.be.true;

    utilsStub.restore();
    consoleSpy.restore();
  })
})
