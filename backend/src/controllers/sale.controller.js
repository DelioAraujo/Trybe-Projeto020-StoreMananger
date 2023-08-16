const { salesService } = require('../services');

const findAll = async (req, res) => {
  const { status, data } = await salesService.findAll();
  return res.status(status).json(data);
};

const findById = async (req, res) => {
  const { Id } = req.params;
  const { status, data } = await salesService.findById(Id);
  return res.status(status).json(data);
};

// const createSale = async (req, res) => {
//   const { body } = req;
//   const { status, data } = await salesService.createSale(body);
//   return res.status(status).json(data);
// };

module.exports = {
  findAll,
  findById,
};