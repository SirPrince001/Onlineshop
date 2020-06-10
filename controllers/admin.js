const Product = require("../models/mProduct");

exports.addProducts = (req, res, next) => {
  //res.sendFile(path.join(__dirname , '../' , 'views' , 'product.html'))
  res.render("../views/admin/edit-product", {
    pageTitle: " Add Product",
    editing: false,
  });
};

exports.postProduct = (req, res, next) => {
  // get all the details of the products
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const description = req.body.description;

  exports.getEditProduct = (req, res, next) => {
    const editMode = req.query.edit;
    if (!editMode) {
      res.redirect("/");
    }

    const prodId = req.params.productId;
    Product.findById(prodId, (product) => {
      if (!product) {
        res.redirect("/");
      }

      res.render("../views/admin/edit-product", {
        pageTitle: "Edit Product",
        editing: editMode,
        product: product,
      });
    });
  };

  const product = new Product(title, imageUrl, price, description);
  product.save();
  res.redirect("/");
};

exports.getProduct = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render("../views/admin/admin-product-list", {
      prods: products,
      pageTitle: "All Products",
      hasProduct: products.length > 0,
    });
  });
};
