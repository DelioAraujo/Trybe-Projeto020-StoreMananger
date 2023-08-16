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

// const createSale = async (body) => {
//   const promises = [];

//   for (const item of body) {
//     const { productId, quantity } = item;

//     if (!productId) {
//       return { status: 400, data: { message: '"productId" é obrigatório' } };
//     }

//     if (!quantity) {
//       return { status: 400, data: { message: '"quantity" é obrigatório' } };
//     }

//     if (quantity <= 0) {
//       return { status: 422, data: { message: '"quantity" deve ser maior ou igual a 1' } };
//     }

//     promises.push(salesModel.createSale(productId, quantity));
//   }

// };

module.exports = {
  findAll,
  findById,
};