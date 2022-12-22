const Product = require("../models/product");

exports.getAddProduct = (req, res, next) => {

}

exports.postAddProduct = async (req, res, next) => {
    const {title, price, imageUrl, description} = req.body;
   
    res.json(await new Product(title, price, description, imageUrl, null, req.user._id).save())
} 

exports.postEditProduct = async (req, res, next) => {
    const {id, title, price, description, imageUrl} = req.body;
    
    res.json(await new Product(title, price, description, imageUrl, id).save())
}

exports.postDeleteProduct = async (req, res, next) => {
    const {id} = req.body

    res.json(await Product.deleteById(id))
}