const sendPaymentRequestToApi = require('./3-payment.js');
const Utils = require('./utils.js');
const { expect } = require('chai');
const sinon = require('sinon');

describe('sendPaymentRequestToApi', function () { 
  const utilsSpy = sinon.spy(Utils, 'calculateNumber');

  it('should return same value of calculatNumber', function () {
    sendPaymentRequestToApi(100, 20);

    expect(utilsSpy.calledOnce).to.be.true;

    expect(utilsSpy.calledWith('SUM', 100, 20)).to.be.true;
    utilsSpy.restore();
  })
})
