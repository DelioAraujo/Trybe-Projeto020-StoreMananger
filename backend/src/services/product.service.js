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

  module.exports = {
    findById,
    findAll,
    register,
  };