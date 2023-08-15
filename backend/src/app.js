const express = require('express');
const { productModel } = require('./models');

const app = express();
app.use(express.json());

// não remova esse endpoint, é para o avaliador funcionar
app.get('/', (_request, response) => {
  response.json({ status: 'Store Manager UP!' });
});

// projeto...

app.get('/products', async (req, res) => {
  const products = await productModel.findAll();

  return res.status(200).json(products);
});

app.get('/products/:productId', async (req, res) => {
  const { productId } = req.params;

  const product = await productModel.findById(productId);

  if (!product) return res.status(404).json({ message: 'Product not found' });

  return res.status(200).json(product);
});

module.exports = app;
