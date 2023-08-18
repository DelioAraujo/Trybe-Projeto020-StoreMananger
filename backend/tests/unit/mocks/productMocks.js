const findAllResolves = [
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
];

const findByIdResolves = {
  id: 1,
  name: 'Martelo de Thor',
};

const registerResolves = [
  {
    insertId: 1,
  },
  undefined,
];

const updateResolves = {
  updatedProductData: {
    id: 1,
    name: 'Martelo do Batman',
  },
  metaData: {
    affectedRows: 1,
  },
};

const deleteResolves = {
  affectedRows: 1,
};

  module.exports = {
    findAllResolves,
    findByIdResolves,
    registerResolves,
    updateResolves,
    deleteResolves,
  };