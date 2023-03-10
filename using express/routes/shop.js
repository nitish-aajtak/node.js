const express= require('express');
const path = require('path');

const rootDir = require('../util/path')
const admin = require('./admin');

const router = express.Router();

router.get('/',(req,res,next) => {
    // console.log("In another middleware");≥
    
    // res.sendFile(path.join(rootDir,'views','shop.html'));
    const products = admin.products;
    res.render('shop');
})

module.exports = router;