const Product = require('../models/product');

exports.getProducts = async (req, res, next) => {
    res.json(await Product
    .fetchAll())
}

exports.getProductById = async (req, res, next) => {
    res.json(await Product.fetchById(req.params.productId))
}

exports.postCart = async (req, res, next) => {
    const product = await Product.fetchById(req.body.productId);
    await req.user.addToCart(product)
    res.status(200).send()
}

exports.deleteCartProduct = async (req, res, next) => { 
    try {
        await req.user.deleteItemFromCart(req.body.productId);

        res.status(204).send();
    }
    catch(err) {
        console.log('deleting product error: ', err)
    }
}

exports.createOrder = async (req, res, next) => {   
    res.status(200).json(await req.user.addOrder())
}   

exports.getOrders = async (req, res, next) => { 
    res.status(200).json(await req.user.getOrders())
}