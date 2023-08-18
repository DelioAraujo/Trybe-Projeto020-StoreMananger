const { productService } = require('../services');

const findAll = async (req, res) => {
  const { status, data } = await productService.findAll();
  return res.status(status).json(data);
};

const findById = async (req, res) => {
  const { id } = req.params;
  const { status, data } = await productService.findById(id);
  return res.status(status).json(data);
};

const register = async (req, res) => {
  const { name } = req.body;

  const registeredProductData = await productService.register(name);

  res.status(201).json(registeredProductData);
};

const update = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  const { status, data } = await productService.update(id, name);

  res.status(status).json(data);
};

const deleteProduct = async (req, res) => {
  const { id } = req.params;
  const { status } = await productService.deleteProduct(id);

  if (status === 404) {
    return res.status(404).json({ message: 'Product not found' });
  }

  res.status(status).send();
};

module.exports = {
  findAll,
  findById,
  register,
  update,
  deleteProduct,
};