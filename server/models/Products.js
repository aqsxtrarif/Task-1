const {  mongoose } = require("mongoose");

const productSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type:  Number ,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId, 
        required: true
    }
})

const productModel = mongoose.model('products',  productSchema );

module.exports = productModel ;