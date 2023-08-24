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
    updateServiceResolves,
    updateNoNameResolves,
    updateShortNameResolves,
    updateIdNotFound,
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

  it('testa a função update', async function () {
    sinon.stub(productService, 'update')
    .resolves(updateServiceResolves);

    const req = { params: { id: 2 }, body: { name: 'Delio' } };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };

    await productController.update(req, res);
    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(updateServiceResolves.data);
  });

  it('testa a função update sem name', async function () {
    sinon.stub(productService, 'update')
    .resolves(updateNoNameResolves);

    const req = { params: { id: 2 }, body: { name: '' } };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };

    await productController.update(req, res);
    expect(res.status).to.have.been.calledWith(updateNoNameResolves.status);
    expect(res.json).to.have.been.calledWith(updateNoNameResolves.data);
  });

  it('testa a função update com nome pequeno', async function () {
    sinon.stub(productService, 'update')
    .resolves(updateShortNameResolves);

    const req = { params: { id: 2 }, body: { name: 'deli' } };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };

    await productController.update(req, res);
    expect(res.status).to.have.been.calledWith(updateShortNameResolves.status);
    expect(res.json).to.have.been.calledWith(updateShortNameResolves.data);
  });

  it('testa a função update com id errado', async function () {
    sinon.stub(productService, 'update')
    .resolves(updateIdNotFound);

    const req = { params: { id: 99 }, body: { name: 'deli' } };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };

    await productController.update(req, res);
    expect(res.status).to.have.been.calledWith(updateIdNotFound.status);
    expect(res.json).to.have.been.calledWith(updateIdNotFound.data);
  });
});