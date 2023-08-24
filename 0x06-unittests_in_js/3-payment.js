const Utils = require('./utils.js');

function sendPaymentRequestToApi (totalAmount, totalShipping) {
  const total = Utils.calculateNumber('SUM', totalAmount, totalShipping);
  console.log(`The toal is: ${total}`);
}

module.exports = sendPaymentRequestToApi;
