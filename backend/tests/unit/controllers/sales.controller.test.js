const chai = require('chai');
const { expect } = require('chai');
const sinonChai = require('sinon-chai');
const sinon = require('sinon');
const { saleController } = require('../../../src/controllers');
const { salesService } = require('../../../src/services');
const {
    findAllServiceResolves,
    findByIdSalesServiceResolve
} = require('../mocks/salesServiceMocks');
const {
    finAllSalesResolve,
    findByIdSalesResolve
} = require('../mocks/salesModelMocks');

chai.use(sinonChai);

describe('testes da camada product.controller', function () {
  afterEach(function () {
    sinon.restore();
  });

  it('testa a função findAll do controller', async function () {
    sinon.stub(salesService, 'findAll')
    .resolves(findAllServiceResolves);

    const req = { params: {}, body: {} };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };

    await saleController.findAll(req, res);
    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(finAllSalesResolve);
  });

  it('testa a função findById do controller', async function () {
    sinon.stub(salesService, 'findById')
    .resolves(findByIdSalesServiceResolve);

    const req = { params: { id: 1 }, body: {} };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };

    await saleController.findById(req, res);
    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(findByIdSalesResolve);
  });

  it('testa a função createNewSale do controller com id inexistente', async function () {
    sinon.stub(salesService, 'createNewSale')
    .resolves([]);

    const req = { params: { id: 99 }, body: {} };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };

    await saleController.findById(req, res);
    expect(res.status).to.have.been.calledWith(404);
    expect(res.json).to.have.been.calledWith({ message: 'Sale not found' });
  });

//   it('testa a função delete do controller', async function () {
//     sinon.stub(productService, 'deleteProduct')
//     .resolves(deleteServiceResolves);

//     const req = { params: { id: 1 }, body: { } };
//     const res = {
//       status: sinon.stub().returnsThis(),
//       json: sinon.stub(),
//     };

//     await productController.deleteProduct(req, res);
//     expect(res.status).to.have.been.calledWith(204);
//   });

//   it('testa a função delete do controller com id errado', async function () {
//     sinon.stub(productService, 'deleteProduct')
//     .resolves(deleteNoAffectedRowsResolves);

//     const req = { params: { id: 999 }, body: { } };
//     const res = {
//       status: sinon.stub().returnsThis(),
//       json: sinon.stub(),
//     };

//     await productController.deleteProduct(req, res);
//     expect(res.status).to.have.been.calledWith(404);
//   });
});