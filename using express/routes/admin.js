const express = require('express');
const router = express.Router();
const path = require('path');

const rootDir = require('../util/path')

// const addproduct = require('../views/app')

const products = [];

router.get('/add-product',(req,res,next) => {
    // res.send('<h1>Currently in product section </h1>');
    // console.log(rootDir)
    res.render('add-product',{title:req.body.title,path:"/admin/add-product"});
})
router.post('/add-product' ,(req,res,next)=>{
    // console.log(req.body);
    products.push({title: req.body.title});
    // console.log("/in product")
    res.redirect('/')
})

module.exports.routes = router;
module.exports.products = products;