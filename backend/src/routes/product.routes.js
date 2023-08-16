const route = require('express').Router();
const { productController } = require('../controllers');
const validateBodyData = require('../middlewares/validateBodyData.middleware');

route.get('/', productController.findAll);
route.get('/:id', productController.findById);

route.post('/', validateBodyData, productController.register);

module.exports = route;