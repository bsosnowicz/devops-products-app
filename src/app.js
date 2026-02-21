const express = require('express');
const app = express();

app.use(express.json());

const products = [
  { id: 1, name: 'Laptop', price: 2999.99 },
  { id: 2, name: 'Smartphone', price: 1499.99 },
  { id: 3, name: 'Headphones', price: 299.99 }
];

app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to Products API',
    status: 'running',
    endpoints: ['GET /', 'GET /products']
  });
});

app.get('/products', (req, res) => {
  res.json(products);
});

app.get('/products/:id', (req, res) => {
  const product = products.find(p => p.id === parseInt(req.params.id));
  if (!product) {
    return res.status(404).json({ error: 'Product not found' });
  }
  res.json(product);
});

module.exports = app;
