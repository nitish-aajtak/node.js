const express = require('express');
const router = express.Router();
const path = require('path');

// const addproduct = require('../views/app')
const productsController = require('../controllers/product')


router.get('/add-product',productsController.getAddProduct);
router.post('/add-product' , productsController.postAddProduct);

module.exports.routes = router;
