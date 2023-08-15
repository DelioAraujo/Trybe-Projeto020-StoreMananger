const { expect } = require('chai');
const sinon = require('sinon');
const connection = require('../../../src/models/connection');
const { productModel } = require('../../../src/models');
const { allProductsMock, allProductsMockFromDB } = require('../mocks/productMocks');

describe('testes da camada product.model', function () {
    beforeEach(function () {
        sinon.stub(connection, 'execute').resolves(allProductsMockFromDB);
      });

    afterEach(function () {
        sinon.restore();
      });

    it('testa a função findAll do model', async function () {
        const findAllResult = await productModel.findAll();

        expect(findAllResult).to.be.an('array');
        expect(findAllResult).to.deep.equal(allProductsMock);
    });

    it('testa a função findById', async function () {
      const findByIdResult = await productModel.findById(1);

      expect(findByIdResult).to.deep.equal(allProductsMock[0]);
      expect(findByIdResult).to.be.an('object');
    });
});