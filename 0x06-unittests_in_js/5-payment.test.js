const sendPaymentRequestToApi = require('./5-payment.js');
const Utils = require('./utils.js');
const { expect } = require('chai');
const sinon = require('sinon');

describe('sendPaymentRequestToApi', function () { 
  let consoleSpy;
  beforeEach(function() {
    consoleSpy = sinon.spy(console, 'log');
  })
  it('validate usage of calculageNumber', function () {
    const utilsStub = sinon.stub(Utils, 'calculateNumber').returns(10);

    sendPaymentRequestToApi(100, 20);

    expect(utilsStub.alwaysReturned(10)).to.be.true;
    expect(consoleSpy.calledWith('The total is: 10')).to.be.true;
    expect(utilsStub.calledWith('SUM', 100, 20)).to.be.true;

    utilsStub.restore();
    consoleSpy.restore();
  })

  it('verify console log', function () {
    sendPaymentRequestToApi(100, 20);
    expect(consoleSpy.calledOnce).to.be.true;
    expect(consoleSpy.calledWith('The total is: 120')).to.be.true;
  })

  it('verify console log', function () {
    sendPaymentRequestToApi(10, 10);
    expect(consoleSpy.calledOnce).to.be.true;
    expect(consoleSpy.calledWith('The total is: 20')).to.be.true;
  })

  afterEach(function() {
    consoleSpy.restore();
  })
})
