const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
  res.render('admin/edit-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    editing:false
  });
};

exports.getEditProduct = (req, res, next) => {
  const editMode = req.query.edit;
  if(!editMode){
    return res.render('/');
  }
  const prodId = req.params.productId;
  console.log(editMode);
  Product.findById(prodId, (product => {
    if(!product)
    {
      return res.render('/');
    }
      res.render('admin/edit-product', {
      pageTitle: 'Edit Product',
      path: '/admin/edit-product',
      editing:editMode,
      product :product
    });
  }))
  
};

exports.postAddProduct = (req, res, next) => {
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const description = req.body.description;
  const product = new Product(title, imageUrl, description, price);
  product.save();
  res.redirect('/');
};

exports.getProducts = (req, res, next) => {
  Product.fetchAll(products => {
    res.render('admin/products', {
      prods: products,
      pageTitle: 'Admin Products',
      path: '/admin/products'
    });
  });
};
