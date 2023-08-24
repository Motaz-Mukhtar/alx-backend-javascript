const { expect } = require('chai');
const request = require('request');



describe('test api expresss', function () {
  describe('GET /', function () {
    it ('should return correct data', function () {
      request('http://127.0.0.1:7865/', (err, response, body) => {
        expect(body).to.equal('Welcome to the payment system');
	expect(response.statusCode).to.equal(200);
      })
    })
  })
})
