const camelize = require('camelize');
const connection = require('./connection');

const findAll = async () => {
    const [productsList] = await connection.execute(
        'SELECT * FROM products ORDER BY id ASC',
    );

    return camelize(productsList);
};

const findById = async (productId) => {
    const [[product]] = await connection.execute(
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

const deleteProduct = async (productId) => {
    const [metaData] = await connection.execute(
        'DELETE FROM products WHERE id = ?',
        [productId],
      );

      return metaData;
};

// const productIdList = async () => {
//     const [productIds] = await conection.execute(
//       'SELECT id FROM products',
//     );

//     return productIds.map((row) => row.id);
//   };

module.exports = {
    findAll,
    findById,
    register,
    update,
    deleteProduct,
    // productIdList,
};