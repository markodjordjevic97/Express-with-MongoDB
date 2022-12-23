const { ObjectId } = require('mongodb');


const getDb = require('../helpers/database').getDb;

class Product {
    constructor(title,price,description,imageUrl, id, userId ) {
        this.title = title;
        this.price = price;
        this.description = description;
        this.imageUrl = imageUrl;
        this._id = id ? new ObjectId(id) : null;
        this.userId = userId;
    }


    async save() {
        const db = getDb();

        if(this._id) {
            // update project
           return db.collection('products').findOneAndUpdate({_id: this._id}, {$set: this})
        }

       return db.collection('products')
        .insertOne(this)
    }

    static async fetchAll() {
         const db = getDb();
        return db.collection('products')
        .find()
        .toArray()
    }

    static async fetchById(productId) {
        const db = getDb();
        return db.collection('products').findOne({  _id: new ObjectId(productId)})
    }

    static async deleteById(productId) {
        const db = getDb();
        return db.collection('products').deleteOne({_id: new ObjectId(productId)})
    }
}


module.exports = Product; 