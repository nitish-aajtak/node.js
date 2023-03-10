const Product = require('../models/product');
// 

exports.getAddProduct = (req,res,next) => {
    // res.send('<h1>Currently in product section </h1>');
    // console.log(rootDir)
    res.render('add-product',{title:req.body.title,path:"/admin/add-product"});
};

exports.postAddProduct = (req,res,next)=>{
    // console.log(req.body);
    // products.push({title: req.body.title});
    const product = new Product(req.body.title);
    product.save();
    // console.log("/in product")
    res.redirect('/')
}
exports.products = (req,res,next) => {
    // console.log("In another middleware");≥
    
    // res.sendFile(path.join(rootDir,'views','shop.html'));
    // const products = admin.products;
    // console.log(products);
    const products = Product.fetchAll();
    res.render('shop', ({prods:products, title:"shop " ,path:'/'}));
}

exports.error = ((req,res,next)=>{
    // res.status(404).sendFile(path.join(__dirname,'views','404.html'))
    res.render('404',{title:"Page Not FOund"});
})