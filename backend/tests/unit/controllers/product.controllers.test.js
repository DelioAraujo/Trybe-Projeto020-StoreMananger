const chai = require('chai');
const { expect } = require('chai');
const sinonChai = require('sinon-chai');
const sinon = require('sinon');
const { productController } = require('../../../src/controllers');
const { productService } = require('../../../src/services');
const {
    findAllServiceResolves,
    findByIdServiceResolves,
    deleteServiceResolves,
    deleteNoAffectedRowsResolves,
} = require('../mocks/productServiceMocks');
const {
    findAllResolves,
    findByIdResolves,
} = require('../mocks/productModelMocks');

chai.use(sinonChai);

describe('testes da camada product.controller', function () {
  afterEach(function () {
    sinon.restore();
  });

  it('testa a função findAll do controller', async function () {
    sinon.stub(productService, 'findAll')
    .resolves(findAllServiceResolves);

    const req = { params: {}, body: {} };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };

    await productController.findAll(req, res);
    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(findAllResolves);
  });

  it('testa a função findById do controller', async function () {
    sinon.stub(productService, 'findById')
    .resolves(findByIdServiceResolves);

    const req = { params: { id: 1 }, body: {} };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };

    await productController.findById(req, res);
    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(findByIdResolves);
  });

  it('testa a função delete do controller', async function () {
    sinon.stub(productService, 'deleteProduct')
    .resolves(deleteServiceResolves);

    const req = { params: { id: 1 }, body: { } };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };

    await productController.deleteProduct(req, res);
    expect(res.status).to.have.been.calledWith(204);
  });

  it('testa a função delete do controller com id errado', async function () {
    sinon.stub(productService, 'deleteProduct')
    .resolves(deleteNoAffectedRowsResolves);

    const req = { params: { id: 999 }, body: { } };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };

    await productController.deleteProduct(req, res);
    expect(res.status).to.have.been.calledWith(404);
  });
});