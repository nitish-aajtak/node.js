const express = require('express');
const router = express.Router();
const path = require('path');

// const addproduct = require('../views/app')

router.use('/add-product',(req,res,next) => {
    // res.send('<h1>Currently in product section </h1>');
    res.sendFile(path.join(__dirname),'views','add-product.html');
})
router.post('/product' ,(req,res,next)=>{
    // console.log(req.body);
    // console.log("/in product")
    res.redirect('/')
})

module.exports = router;