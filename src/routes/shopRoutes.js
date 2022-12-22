const router = require('express').Router();

const shopController = require('../controllers/shop');

router.get('/products', shopController.getProducts)

router.get('/products/:productId', shopController.getProductById)

router.post('/cart', shopController.postCart)

router.delete('/delete-product', shopController.deleteCartProduct)

router.post('/create-order', shopController.createOrder)

router.get('/orders', shopController.getOrders)

module.exports = router