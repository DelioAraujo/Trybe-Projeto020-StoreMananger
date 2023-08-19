const finAllSalesResolve = [
    {
      saleId: 1,
      date: '2023-08-19T15:28:22.000Z',
      productId: 1,
      quantity: 5,
    },
    {
      saleId: 1,
      date: '2023-08-19T15:28:22.000Z',
      productId: 2,
      quantity: 10,
    },
  ];

  const findByIdSalesResolve = [
    {
      date: '2023-08-19T15:28:22.000Z',
      productId: 1,
      quantity: 5,
    },
    {
      date: '2023-08-19T15:28:22.000Z',
      productId: 2,
      quantity: 10,
    },
  ];

  const createSaleResolve = [
    { insertId: 100 },
  ];

  const createSaleResolveId = 100;

  module.exports = {
    finAllSalesResolve,
    findByIdSalesResolve,
    createSaleResolve,
    createSaleResolveId,
  };