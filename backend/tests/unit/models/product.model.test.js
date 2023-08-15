const { expect } = require('chai');
const sinon = require('sinon');
const connection = require('../../../src/models/connection');
const { productModel } = require('../../../src/models');
const { allProductsMock, allProductsMockFromDB } = require('../mocks/productMocks');

describe('testes da camada model', function () {
    beforeEach(function () {
        sinon.stub(connection, 'execute').resolves(allProductsMockFromDB);
      });

    afterEach(function () {
        sinon.restore();
      });

    it('testa a função findAll do model', async function () {
        const findAll = await productModel.findAll();

        expect(findAll).to.be.an('array');
        expect(findAll).to.deep.equal(allProductsMock);
    });
});