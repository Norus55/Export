const Product = require('../models/products');

//method Post

const   postProduct = async (req, res) => {
    let msg = 'product inserted'
    const body = req.body
    try {
        const product = await Product(body)
        await product.save()
        
    } catch (error) {
        msg = error
    }
    res.json({msg:msg})
}

//Method get
const getProduct = async (req,res) => {
    const products = await Product.find
    res.json(products)
}

//Method PUT
const putProduct= async (req, res) => {
    
    let msg = 'Product updated'
    const {productName,productWeight,productPrice} = req.body

    try {
        await Product.findOneAndUpdate({productName: productName}, {productWeight: productWeight, productPrice: productPrice})
    } catch (error) {
        msg = error        
    }
    res.json({msg:msg})
}

//Method DELETE

const deleteProduct = async (req, res) => {
    let msg = 'Product deleted'
    id = req.params.id
    try {
        await Product.findByIdAndDelete({_id: id})
        
    } catch (error) {
        msg = 'there was a problem while deleting'
    }
    res.json({msg:msg})
}

module.exports = {
    postProduct,
    getProduct,
    putProduct,
    deleteProduct
}