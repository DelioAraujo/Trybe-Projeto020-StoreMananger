const camelize = require('camelize');
const conection = require('./connection');

const findAll = async () => {
    const [allSales] = await conection.execute(
        `
        SELECT
            s.id AS saleId,
            s.date,
            sp.product_id AS productId,
            sp.quantity
        FROM
            sales s
        JOIN
            sales_products sp ON s.id = sp.sale_id
        `,
    );

    return camelize(allSales);
};

const findById = async (productId) => {
    const [[product]] = await conection.execute(
        `
        SELECT
            s.id AS saleId,
            s.date,
            sp.product_id AS productId,
            sp.quantity
        FROM
            sales s
        JOIN
            sales_products sp ON s.id = sp.sale_id
        WHERE
            s.id = ?
        `,
        [productId],
        );

    return camelize(product);
};

// const createSale = async (productId, quantity) => {
//     // Verificar se o produto existe
//     const [productCheck] = await conection.execute(
//       `
//       SELECT * FROM products WHERE id = ?
//       `,
//       [productId],
//     );

//      // Inserir a venda na tabela "sales" e obter o ID da venda inserida
//     const [insertedSale] = await conection.execute(
//       `
//       INSERT INTO sales (date)
//       VALUES (NOW())
//       `,
//     );
//     const saleId = insertedSale.insertId;

//     // Inserir a venda na tabela "sales_products"
//     await conection.execute(
//       `
//       INSERT INTO sales_products (sale_id, product_id, quantity)
//       VALUES (?, ?, ?)
//       `,
//       [saleId, productId, quantity],
//     );

//     const itemInserted = {
//       productCheck,
//       saleId,
//       productId,
//       quantity,
//     };

//     return {
//       itemInserted,
//     };
//   };

module.exports = {
    findAll,
    findById,
};