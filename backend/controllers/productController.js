const Product = require("../models/productModel");

//Get all products
exports.getAllProducts = async (req, res) => {
    // res.status(200).json({message: "Route is working fine all!"});
    const products = await Product.find();
    res.status(200).json({
        success:true,
        products
    });
}

//Get product details
exports.getProductDetails = async (req, res, next) => {
    const product = await Product.findById(req.params.id);

    if (!product) {
        return res.status(500).json({
            success:false,
            message: "Product not found"
        });
    }

    res.status(200).json({
        success:true,
        product
    });
}

//Create product -- Admin
exports.createProduct = async (req, res, next) => {
    // res.status(201).json({message: "Route is working fine new!"});
    const product = await Product.create(req.body);
    res.status(201).json({
        success:true,
        product
    });
}

//Update product -- Admin
exports.updateProduct = async (req, res, next) => {
    let product = await Product.findById(req.params.id);
    if (!product) {
        return res.status(500).json({
            success:false,
            message: "Product not found"
        });
    }

    product = await Product.findByIdAndUpdate(req.params.id, req.body, {
        new:true,
        runValidators:true,
        useFindAndModify:false
    });

    res.status(200).json({
        success:true,
        product
    });
}

//Delete product --Admin
exports.deleteProduct = async (req, res, next) => {
    const product = await Product.findById(req.params.id);

    if (!product) {
        return res.status(500).json({
            success:false,
            message: "Product not found"
        });
    }

    await product.deleteOne({_id: req.params.id});

    res.status(200).json({
        success:true,
        message: "Product deleted successfully"
    });
}