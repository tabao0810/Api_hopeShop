const express = require('express');

const { createProduct, getAllProduct, getSingleProduct, updateProduct, deleteProduct } = require('../controllers/products');

const routerProduct = express.Router();

routerProduct.post('/product/create', createProduct);
routerProduct.get('/product/get', getAllProduct);
routerProduct.get('/product/:productId', getSingleProduct);

routerProduct.put('/product/:productId', updateProduct);
routerProduct.delete('/product/:productId', deleteProduct)

module.exports = routerProduct;