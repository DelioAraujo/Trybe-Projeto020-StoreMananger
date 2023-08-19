const { salesModel } = require('../models');

const findAll = async () => {
  const sales = await salesModel.findAll();
  return { status: 200, data: sales };
};

const findById = async (saleId) => {
  const sale = await salesModel.findById(saleId);
  if (sale.length === 0) {
    return { status: 404, data: { message: 'Sale not found' } };
  }
  return { status: 200, data: sale };
};

const createNewSale = async (body) => {
  const sale = await salesModel.saleProductCompleteData(body);
  return { status: 201, data: sale };
};

module.exports = {
  findAll,
  findById,
  createNewSale,
};
