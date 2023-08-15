const { salesModel } = require('../models');

const findAll = async () => {
  const sales = await salesModel.findAll();
  return { status: 200, data: sales };
};

const findById = async (saleId) => {
  const sale = await salesModel.findById(saleId);
  if (!sale) {
    return { status: 404, data: { message: 'Sale not found' } };
  }
  return { status: 200, data: sale };
};

module.exports = {
  findAll,
  findById,
};