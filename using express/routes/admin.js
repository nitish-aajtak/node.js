const express = require('express');
const router = express.Router();

router.use('/add-product',(req,res,next) => {
    console.log("In middleware");
    // res.send('<h1>Currently in product section </h1>');
    res.send('<form action="/product" method="POST"> <input type="text" name="title"><button type="button">product</button></input></form>')
})
router.post('/product' ,(req,res,next)=>{
    console.log(req.body);
    console.log("/in product")
    res.redirect('/')
})

module.exports = router;