const express = require('express');

const app = express();
const port = '7865';

app.get('/', (req, res) => {
  res.statusCode = 200;
  res.send('Welcome to the payment system');
});

app.get('/cart/:id([0-9]+)', (req, res) => {
  const id = req.params.id;
  res.statusCode = 200;
  res.end(`Payment methods for cart ${id}`);
});

app.get('/available_payments', (req, res) => {
  const obj = {
    payment_methods: {
      credit_cards: true,
      paypal: false
    }
  };
  res.statusCode = 200;
  res.json(obj);
});

app.post('/login', (req, res) => {
  res.statusCode = 200;
  res.end(`Welcome ${req.body.userName}`);
});

app.listen(port, () => {
  console.log('API available on localhost port 7865');
});
