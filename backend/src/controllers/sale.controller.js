const { salesService } = require('../services');

const findAll = async (req, res) => {
  const { status, data } = await salesService.findAll();
  return res.status(status).json(data);
};

const findById = async (req, res) => {
  const { id } = req.params;
  const { status, data } = await salesService.findById(id);
  return res.status(status).json(data);
};

const createNewSale = async (req, res) => {
  const { body } = req;
  const { status, data } = await salesService.createNewSale(body);
  return res.status(status).json(data);
};

module.exports = {
  findAll,
  findById,
  createNewSale,
};