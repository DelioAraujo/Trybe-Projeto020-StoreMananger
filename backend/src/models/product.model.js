const camelize = require('camelize');
const conection = require('./connection');
const connection = require('./connection');

const findAll = async () => {
    const [productsList] = await conection.execute(
        'SELECT * FROM products ORDER BY id ASC',
    );

    return camelize(productsList);
};

const findById = async (productId) => {
    const [[product]] = await conection.execute(
        'SELECT * FROM products WHERE id = ? ORDER BY id ASC',
        [productId],
        );

    return camelize(product);
};

const register = async (name) => {
    const [metaData] = await connection.execute(
        'INSERT INTO products (name) VALUES (?)',
        [name],
    );

    return metaData;
};

const update = async (productId, newData) => {
    // Atualizar o produto na tabela "products"
    const [metaData] = await connection.execute(
      'UPDATE products SET name = ? WHERE id = ?',
      [newData, productId],
    );

    const updatedProductData = {
        id: productId,
        name: newData,
    };

    return {
        updatedProductData,
        metaData,
    };
  };

module.exports = {
    findAll,
    findById,
    register,
    update,
};