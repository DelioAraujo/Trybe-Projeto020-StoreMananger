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

module.exports = {
    findAll,
    findById,
};