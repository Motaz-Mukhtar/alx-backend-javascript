const { expect } = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token.js');


describe('getPaymentTokenFromAPI', function () {
  it('should return success message', function (done) {
    getPaymentTokenFromAPI(true)
    .then((value) => {
      expect(value).to.include({data: 'Successful response from the API'});
      done();
    }).catch((error) => done(error));
    
  })
})
