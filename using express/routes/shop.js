const express= require('express');
const path = require('path');

const router = express.Router();

router.get('/product',(req,res,next) => {
    // console.log("In another middleware");≥
    res.sendFile(path.join(__dirname),'views','shop.html');
})

module.exports = router;