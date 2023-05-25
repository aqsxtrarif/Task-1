const productModel = require("../models/Products");

const createProduct = async (req, res) => {
    try {
        const { title, description, price, quantity } = req.body; 
        const userId = req.user.id ;

        const product = productModel({
            title, description, price, quantity, userId
        })
     
        const createProduct = await product.save();
        res.status(200).send({
         success: true,
         message: "Product created Successfully",
         createProduct
        }) 

    } catch (error) {
        res.status(500).send({
            success: false,
            message: "Internal Server Error",
            error
        }) 
        console.log(error);
    }  
}



const getProducts = async (req, res) => {
    try {
        const { userId } = req.params;

        const products = await productModel.find({ userId: userId });
        res.status(200).send({
        success: true,
        products
       })

    } catch (error) {
        res.status(500).send({
            success: true,
            message: "Internal Server error",
            error
        })
    }    
};



const deleteProduct = async (req, res) => {
    try {
        const { product_id } = req.params;

        const prod = await productModel.findById(product_id);
        console.log(prod);
         
        if(!prod) return res.status(404).send("Product not found");

        await productModel.findByIdAndDelete(prod._id);

        res.status(200).send({
        success: true,
        message: "Product deleted successfully"
       })

    } catch (error) {
        res.status(500).send({
            success: true,
            message: "Internal Server error",
            error
        })
    }    
}



module.exports = { createProduct, getProducts , deleteProduct };