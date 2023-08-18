const findAllServiceResolves = {
  status: 200,
  data: [
  {
    id: 1,
    name: 'Martelo de Thor',
  },
  {
    id: 2,
    name: 'Traje de encolhimento',
  },
  {
    id: 3,
    name: 'Escudo do Capitão América',
  },
],
};

const findByIdServiceResolves = {
  status: 200,
  data: {
    id: 1,
    name: 'Martelo de Thor',
  },
};

const productNotFound = {
  status: 404,
  data: { message: 'Product not found' },
};

const registerServiceResolves = {
  id: 1,
  name: 'Delio',
};

const deleteServiceResolves = {
  status: 204,
};

const deleteNoAffectedRowsResolves = { status: 404, data: { message: 'Product not found' },
};

const updateServiceResolves = {
  status: 200,
  data: { id: 2,
          name: 'delio',
         },
  };

  const updateNoNameResolves = { status: 400, data: { message: '"name" is required' },
};

const updateShortNameResolves = {
  status: 422,
  data: { message: '"name" length must be at least 5 characters long' } };

const updateIdNotFound = { status: 404, data: { message: 'Product not found' } };

  module.exports = {
    findAllServiceResolves,
    findByIdServiceResolves,
    productNotFound,
    registerServiceResolves,
    deleteServiceResolves,
    deleteNoAffectedRowsResolves,
    updateServiceResolves,
    updateNoNameResolves,
    updateShortNameResolves,
    updateIdNotFound,
  };