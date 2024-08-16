const {model, Schema, version} = require('mongoose');

const ProductSchema = Schema({
    productName: {type: String, required: true},
    productWeight: {type: String, required: true},
    productPrice: {type: Number, required: true},
},
{versionKey: false}
)

module.exports = model('product', ProductSchema, 'product')