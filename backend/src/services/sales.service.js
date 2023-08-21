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

// const validateSaleItem = (item) => {
//   if (!item.productId) {
//     return { status: 400, message: '"productId" is required' };
//   }
//   if (!item.quantity) {
//     return { status: 400, message: '"quantity" is required' };
//   }
//   if (item.quantity <= 0) {
//     return { status: 422, message: '"quantity" must be greater than or equal to 1' };
//   }
//   return null;
// };

const createNewSale = async (body) => {
  // const validationErrors = body.map(validateSaleItem);

  // const hasErrors = validationErrors.some((error) => error !== null);
  // if (hasErrors) {
  //   return { status: validationErrors[0].status, data: { message: validationErrors[0].message } };
  // }

  const sale = await salesModel.saleProductCompleteData(body);
  return { status: 201, data: sale };
};

module.exports = {
  findAll,
  findById,
  createNewSale,
};
