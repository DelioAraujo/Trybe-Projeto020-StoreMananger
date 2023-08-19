const { expect } = require('chai');
const sinon = require('sinon');
const connection = require('../../../src/models/connection');
const { salesModel } = require('../../../src/models');
const {
    finAllSalesResolve,
    findByIdSalesResolve,
    createSaleResolve,
    createSaleResolveId,
} = require('../mocks/salesModelMocks');

describe('testes da camada sales.model', function () {
  afterEach(function () {
    sinon.restore();
  });

  it('testa a função findAll do model', async function () {
    sinon.stub(connection, 'execute').resolves([finAllSalesResolve]);

    const findAll = await salesModel.findAll();

    expect(findAll).to.be.an('array');
    expect(findAll).to.deep.equal(finAllSalesResolve);
  });

  it('testa a função findbyId do model', async function () {
    sinon.stub(connection, 'execute').resolves([findByIdSalesResolve]);

    const findbyId = await salesModel.findById();

    expect(findbyId).to.be.an('array');
    expect(findbyId).to.deep.equal(findByIdSalesResolve);
  });

  it('testa a função createSale do model', async function () {
    sinon.stub(connection, 'execute').resolves(createSaleResolve);

    const createSale = await salesModel.createSale();

    expect(createSale).to.deep.equal(createSaleResolveId);
  });
});