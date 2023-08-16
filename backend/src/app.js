const express = require('express');
const { productRoutes, salesRoutes } = require('./routes');
const validateBodyData = require('./middlewares/validateBodyData.middleware');

const app = express();
app.use(express.json());

// não remova esse endpoint, é para o avaliador funcionar
app.get('/', (_request, response) => {
  response.json({ status: 'Store Manager UP!' });
});

// projeto....

app.use('/products', validateBodyData, productRoutes);
app.use('/sales', salesRoutes);

module.exports = app;
