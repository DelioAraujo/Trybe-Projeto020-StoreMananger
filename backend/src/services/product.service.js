const { productModel } = require('../models');

const findAll = async () => {
  const productsList = await productModel.findAll();
  return { status: 200, data: productsList };
};

const findById = async (productId) => {
  const product = await productModel.findById(productId);
  if (!product) {
    return { status: 404, data: { message: 'Product not found' } };
  }
  return { status: 200, data: product };
};

const register = async (name) => {
  const metaData = await productModel.register(name);
  const registeredProductData = {
    id: metaData.insertId,
    name,
  };

  return registeredProductData;
};

const update = async (productId, name) => {
  const { updatedProductData, metaData } = await productModel.update(productId, name);

  if (!name) {
    return { status: 400, data: { message: '"name" is required' } };
  }

  if (name.length < 5) {
    return { status: 422, data: { message: '"name" length must be at least 5 characters long' } };
  }

  if (metaData.affectedRows === 0) {
    return { status: 404, data: { message: 'Product not found' } };
  }

  return { status: 200, data: updatedProductData };
};

const deleteProduct = async (productId) => {
 const { metaData } = await productModel.deleteProduct(productId);

 if (metaData.affectedRows === 0) {
  return { status: 404, data: { message: 'Product not found' } };
 }

 return { status: 204 };
};

module.exports = {
  findById,
  findAll,
  register,
  update,
  deleteProduct,
};
