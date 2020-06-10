const express = require('express')

const adminController = require('../controllers/admin')

const router = express.Router()

router.get('/add-product', adminController.addProducts)

router.post('/add-product',adminController.postProduct)

router.get('/admin-product-list' , adminController.getProduct)

router.get('/edit-product/:productId', adminController.getEditProduct)



module.exports = router

//  exports.routes = router
//  exports.products = products