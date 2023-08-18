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

const registerResolves2 = {
    insertId: 1,
  };

const updateResolves = {
    affectedRows: 1,
  };

  const updateModelIdNotFound = {
    affectedRows: 0,
  };

const deleteResolves = {
  affectedRows: 1,
};

const deleteResolves2 = {
  affectedRows: 0,
};

  module.exports = {
    findAllResolves,
    findByIdResolves,
    registerResolves,
    registerResolves2,
    updateResolves,
    deleteResolves,
    deleteResolves2,
    updateModelIdNotFound,
  };