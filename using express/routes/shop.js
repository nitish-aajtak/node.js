const express= require('express');

const router = express.Router();

const productsController = require('../controllers/product')

router.get('/', productsController.products);

module.exports = router;