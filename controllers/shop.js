//const products = [];

const Product = require('../models/mProduct')


exports.getshopProduct = ((req ,res ,next)=>{
  Product.fetchAll(products => {
    res.render('../views/shop/product_list', {prods:products ,pageTitle:'shop' , hasProduct:products.length > 0})
  })
})

exports.getShopProductId = (req,res,next) => {
    const prodId = req.params.productId;
    Product.findById(prodId , product =>{
      res.render('../views/shop/product-details', {product:product , pageTitle:'product details'})
    })
  
 
}


exports.getIndex = ((req ,res,next)=>{
    Product.fetchAll(products => {
        res.render('../views/shop/index',{prods:products ,pageTitle:'shop' , hasProduct:products.length > 0})
    })
})

   exports.getCart = ((req,res,next)=>{
       res.render('../views/shop/cart', {pageTitle:'Your Cart'})
   })

   exports.getOrder = ((req,res,next)=>{
    res.render('../views/shop/order', {pageTitle:'Your Order'})
})


   exports.getCheckout = ((req,res,next)=>{
       res.render('../views/shop/checkout' , {pageTitle:'CheckOut'})
   })
  

    // using sendFile to render html page

    // console.log('shop.js' , productData.products)
    // res.sendFile(path.join(__dirname,'../','views' , 'shop.html'))

    // // rendering the product
    // const products = productData.products

    //sending response using template engine pug

