const camelize = require('camelize');
const conection = require('./connection');

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

module.exports = {
    findAll,
    findById,
};