const camelize = require('camelize');
const connection = require('./connection');

const findAll = async () => {
  const [allSales] = await connection.execute(
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

const findById = async (saleId) => {
  const [sales] = await connection.execute(
    `
        SELECT
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
    [saleId],
  );

  return camelize(sales);
};

const createSale = async () => {
  const [createNewSaleMetadata] = await connection.execute(
    `
      INSERT INTO sales (date)
      VALUES (NOW())
    `,
  );
  const saleId = createNewSaleMetadata.insertId;

  return saleId;
};

const saleProductCompleteData = async (body) => {
  // pega id da venda que vem dentro do retorno/metadado dado quando se faz um insert
  const saleId = await createSale();

  const salesProductsList = body.map((item) => {
    connection.execute(
      `
    INSERT INTO sales_products (sale_id, product_id, quantity) VALUES (?,?,?)
    `,

      [saleId, item.productId, item.quantity],
    );

    return item;
  });

  await Promise.all(salesProductsList);

  return {
    id: saleId,
    itemsSold: salesProductsList,
  };
};

module.exports = {
  findAll,
  findById,
  saleProductCompleteData,
};
