const request = require('request');

request('http://127.0.0.1:7865/available_payments', (err, response, body) => {
  console.log(body)
})

