const findAllServiceResolves = {
  status: 200,
  data: [
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
  ],
};

const findByIdSalesServiceResolve = {
  status: 200,
  data: [
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
  ],
};

const createNewSaleBody = [
  {
    productId: 1,
    quantity: 1,
  },
  {
    productId: 2,
    quantity: 5,
  },
];

module.exports = {
  findAllServiceResolves,
  findByIdSalesServiceResolve,
  createNewSaleBody,
};
