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

  describe('POST /login', function () {
    it('should return 200 statusCode and correct username', function () {
      const opti = {
        url: 'http://127.0.0.1:7865/login',
        method: 'POST',
        json: {
          userName: 'Betty'
	}
      }

      request(opti, (err, response, body) => {
        expect(response.statusCode).to.equal(200);
        expect(body).to.equal(`Welcome ${opti.json.userName}`);
      })
    })
  })

  describe('GET /available_payments', function () {
    it('should return 200 statusCode and correct data', function () {
      const obj = {
        payment_methods: {
          credit_cards: true,
          paypal: false
        }
      }
      request('http://127.0.0.1:7865/available_payments', (err, response, body) => {
        expect(body).to.deep.equal(obj);
      })
    })
  })
})
