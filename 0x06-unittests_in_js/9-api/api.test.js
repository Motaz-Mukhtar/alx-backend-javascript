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

  describe('GET /carts/:id', function () {
    it('should return the correct data', function () {
      const id = 10;
      request(`http://127.0.0.1:7865/cart/${id}`, (err, response, body) => {
        expect(response.statusCode).to.equal(200);
        expect(body).to.equal(`Payment methods for cart ${id}`);
      })
    })
    it('should return Error', function () {
      const notNumber = 'H';
      request(`http://127.0.0.1:7865/cart/${notNumber}`, (err, response, body) => {
        expect(response.statusCode).to.not.equal(200);
      })
    })
  })
})
