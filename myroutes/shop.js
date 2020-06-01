
const express = require('express')

const router = express.Router()

const shopController = require('../controllers/shop')


router.get('/' , shopController.getIndex)

router.get('/product_list', shopController.getshopProduct)

router.get('/products/:productId' , shopController.getShopProductId)

router.get('/cart' , shopController.getCart)

router.post('/cart' , shopController.postCart)

router.post('/' ,shopController.postCart)

router.get('/order' , shopController.getOrder)

router.get('/checkout' , shopController.getCheckout)

module.exports = router 