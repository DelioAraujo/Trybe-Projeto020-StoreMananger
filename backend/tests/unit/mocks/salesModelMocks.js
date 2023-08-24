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

  const createSaleResolveId2 = 3;

  const saleBodydata = [
    {
      productId: 1,
      quantity: 1,
    },
    {
      productId: 2,
      quantity: 5,
    },
  ];

  const saleProductCompleteData = {
    id: 3,
    itemsSold: [
      {
        productId: 1,
        quantity: 1,
      },
      {
        productId: 2,
        quantity: 5,
      },
    ],
  };

  const productsIdList = [1];

  module.exports = {
    finAllSalesResolve,
    findByIdSalesResolve,
    createSaleResolve,
    createSaleResolveId,
    saleProductCompleteData,
    createSaleResolveId2,
    saleBodydata,
    productsIdList,
  };