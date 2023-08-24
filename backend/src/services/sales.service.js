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

const validateProductId = async (productId) => {
  const productsIdList = await salesModel.productsIdList();
  return productsIdList.includes(productId);
};

const validateSaleItem = async ({ productId, quantity }) => {
  if (!productId) {
    return { status: 400, message: '"productId" is required' };
  }

  if (quantity < 1) {
    return { status: 422, message: '"quantity" must be greater than or equal to 1' };
  }

  if (!quantity) {
    return { status: 400, message: '"quantity" is required' };
  }

  const isProductIdValid = await validateProductId(productId);

  if (!isProductIdValid) {
    return { status: 404, message: 'Product not found' };
  }

  return null;
};

const createNewSale = async (body) => {
  const validationErrors = await Promise.all(body.map(validateSaleItem));

  // const hasErrors = validationErrors.some((error) => error !== null);

  const Error = validationErrors.find((error) => error !== null);

  if (Error) {
    return { status: Error.status, data: { message: Error.message } };
  }

  const sale = await salesModel.saleProductCompleteData(body);
  return { status: 201, data: sale };
};

module.exports = {
  findAll,
  findById,
  createNewSale,
  validateProductId,
  validateSaleItem,
};
