const { expect } = require('chai');
const sinon = require('sinon');
const { salesModel } = require('../../../src/models');
const { salesService } = require('../../../src/services');
const {
  finAllSalesResolve,
    findByIdSalesResolve,

} = require('../mocks/salesModelMocks');
const {
    findAllServiceResolves,
    findByIdSalesServiceResolve,

} = require('../mocks/salesServiceMocks');

describe('testes da camada sales.service', function () {
  afterEach(function () {
    sinon.restore();
  });

  it('testa a função findAll do service', async function () {
    sinon.stub(salesModel, 'findAll').resolves(finAllSalesResolve);

    const findAll = await salesService.findAll();

    expect(findAll).to.be.an('object');
    expect(findAll).to.deep.equal(findAllServiceResolves);
  });

  it('testa a função findbyId do service', async function () {
    sinon.stub(salesModel, 'findById').resolves(findByIdSalesResolve);

    const findById = await salesService.findById(1);

    expect(findById).to.be.an('object');
    expect(findById).to.deep.equal(findByIdSalesServiceResolve);
  });

  it('testa a função findbyId do service com model retornando undefined', async function () {
    sinon.stub(salesModel, 'findById').resolves([]);

    const findById = await salesService.findById(1);

    expect(findById).to.be.an('object');
    expect(findById).to.deep.equal({ status: 404, data: { message: 'Sale not found' } });
  });
});