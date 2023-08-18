const { expect } = require('chai');
const sinon = require('sinon');
const { productModel } = require('../../../src/models');
const { productService } = require('../../../src/services');
const {
    findAllResolves,
    findByIdResolves,
    registerResolves2,
    deleteResolves,
    deleteResolves2,
    updateResolves,
    updateModelIdNotFound,
} = require('../mocks/productModelMocks');
const {
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
} = require('../mocks/productServiceMocks');

describe('testes da camada product.service', function () {
  afterEach(function () {
    sinon.restore();
  });

  it('testa a função findAll do service', async function () {
    sinon.stub(productModel, 'findAll').resolves(findAllResolves);

    const findAll = await productService.findAll();

    expect(findAll).to.be.an('object');
    expect(findAll).to.deep.equal(findAllServiceResolves);
  });

  it('testa a função findbyId do service quando a camada model retorna corretamente', async function () {
    sinon.stub(productModel, 'findById').resolves(findByIdResolves);

    const findById = await productService.findById();

    expect(findById).to.be.an('object');
    expect(findById).to.deep.equal(findByIdServiceResolves);
  });

  it('testa a função findbyId do service quando a camada model retorna undefined', async function () {
    sinon.stub(productModel, 'findById').resolves(undefined);

    const findById = await productService.findById();

    expect(findById).to.be.an('object');
    expect(findById).to.deep.equal(productNotFound);
  });

  it('testa a função register do service', async function () {
    sinon.stub(productModel, 'register').resolves(registerResolves2);

    const findById = await productService.register('Delio');

    expect(findById).to.be.an('object');
    expect(findById).to.deep.equal(registerServiceResolves);
  });

  it('testa a função delete do service', async function () {
    sinon.stub(productModel, 'deleteProduct').resolves(deleteResolves);

    const deleteProduct = await productService.deleteProduct();

    expect(deleteProduct).to.be.an('object');
    expect(deleteProduct).to.deep.equal(deleteServiceResolves);
  });

  it('testa a função delete do service com affectedRows igual a 0', async function () {
    sinon.stub(productModel, 'deleteProduct').resolves(deleteResolves2);

    const deleteProduct = await productService.deleteProduct();

    expect(deleteProduct).to.be.an('object');
    expect(deleteProduct).to.deep.equal(deleteNoAffectedRowsResolves);
  });

  it('testa a função update', async function () {
    sinon.stub(productModel, 'update').resolves(updateResolves);

    const update = await productService.update(2, 'delio');

    expect(update).to.be.an('object');
    expect(update).to.deep.equal(updateServiceResolves);
  });

  it('testa a função update sem nome', async function () {
    sinon.stub(productModel, 'update').resolves(updateResolves);

    const update = await productService.update(2);

    expect(update).to.be.an('object');
    expect(update).to.deep.equal(updateNoNameResolves);
  });

  it('testa a função update com nome.length menor que 5', async function () {
    sinon.stub(productModel, 'update').resolves(updateResolves);

    const update = await productService.update(2, 'deli');

    expect(update).to.be.an('object');
    expect(update).to.deep.equal(updateShortNameResolves);
  });

  it('testa a função update product not found', async function () {
    sinon.stub(productModel, 'update').resolves(updateModelIdNotFound);

    const update = await productService.update(0, 'delio');

    expect(update).to.be.an('object');
    expect(update).to.deep.equal(updateIdNotFound);
  });
});