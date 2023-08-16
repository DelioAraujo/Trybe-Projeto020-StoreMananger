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
  console.log(registeredProductData);

  res.status(201).json(registeredProductData);
};

const update = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  const { status, data } = await productService.update(id, name);

  res.status(status).json(data);
};

module.exports = {
  findAll,
  findById,
  register,
  update,
};