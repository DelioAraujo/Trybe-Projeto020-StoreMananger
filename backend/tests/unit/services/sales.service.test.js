const chai = require('chai');
const { expect } = require('chai');
const sinonChai = require('sinon-chai');
const sinon = require('sinon');
const { salesModel } = require('../../../src/models');
const { salesService } = require('../../../src/services');
const {
  finAllSalesResolve,
    findByIdSalesResolve,
    productsIdList,

} = require('../mocks/salesModelMocks');
const {
    findAllServiceResolves,
    findByIdSalesServiceResolve,

} = require('../mocks/salesServiceMocks');

chai.use(sinonChai);

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

  it('testa a função validateProductId do service', async function () {
    sinon.stub(salesModel, 'productsIdList').resolves(productsIdList);

    const validateProductId = await salesService.validateProductId(1);

    expect(validateProductId).to.equal(true);
  });

  it('testa a função findbyId do service com model retornando undefined', async function () {
    sinon.stub(salesModel, 'findById').resolves([]);

    const findById = await salesService.findById(1);

    expect(findById).to.be.an('object');
    expect(findById).to.deep.equal({ status: 404, data: { message: 'Sale not found' } });
  });

  it('testa a função validateSaleItem sem product id', async function () {
    // sinon.stub(salesModel, 'productsIdList').resolves(productsIdList);

    const validateSaleItem = await salesService.validateSaleItem({ productId: undefined, quantity: 2 });

    expect(validateSaleItem).to.deep.equal({ status: 400, message: '"productId" is required' });
  });

  it('testa a função validateSaleItem quantidade 0', async function () {
    // sinon.stub(salesModel, 'productsIdList').resolves(productsIdList);

    const validateSaleItem = await salesService.validateSaleItem({ productId: 1, quantity: 0 });

    expect(validateSaleItem).to.deep.equal({ status: 422, message: '"quantity" must be greater than or equal to 1' });
  });
});