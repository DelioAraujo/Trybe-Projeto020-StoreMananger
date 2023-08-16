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

module.exports = {
    findAll,
    findById,
    register,
};