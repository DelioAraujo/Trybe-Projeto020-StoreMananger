const { expect } = require('chai');
const sinon = require('sinon');
const connection = require('../../../src/models/connection');
const { productModel } = require('../../../src/models');
const {
  findAllResolves,
  findByIdResolves,
  registerResolves,
  updateResolves,
  deleteResolves,
} = require('../mocks/productModelMocks');

describe('testes da camada product.model', function () {
  afterEach(function () {
    sinon.restore();
  });

  it('testa a função findAll do model', async function () {
    sinon.stub(connection, 'execute').resolves([findAllResolves]);

    const findAll = await productModel.findAll();

    expect(findAll).to.be.an('array');
    expect(findAll).to.deep.equal(findAllResolves);
  });

  it('testa a função findById', async function () {
    sinon.stub(connection, 'execute').resolves([[findByIdResolves]]);

    const findById = await productModel.findById(1);

    expect(findById).to.deep.equal(findByIdResolves);
    expect(findById).to.be.an('object');
  });

  it('testa a função register', async function () {
    sinon.stub(connection, 'execute').resolves([registerResolves]);

    const insert = await productModel.register('ProdutoX');

    expect(insert).to.deep.equal(registerResolves);
    expect(insert).to.be.an('array');
  });

  it('testa a função update', async function () {
    sinon.stub(connection, 'execute').resolves([updateResolves]);

    const update = await productModel.update(1, 'Martelo do Batman');

    expect(update).to.deep.equal(updateResolves);
    expect(update).to.be.an('object');
  });

  it('testa a função delete', async function () {
    sinon.stub(connection, 'execute').resolves([deleteResolves]);

    const insert = await productModel.deleteProduct(1, 'Martelo do Batman');

    expect(insert).to.deep.equal(deleteResolves);
    expect(insert).to.be.an('object');
  });
});
