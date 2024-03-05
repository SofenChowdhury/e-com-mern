const Product = require("../models/productModel");

//Create product -- Admin
exports.createProduct = async (req, res, next) => {
    // res.status(201).json({message: "Route is working fine new!"});
    const product = await Product.create(req.body);
    res.status(201).json({
        success:true,
        product
    });
}

//Get all products
exports.getAllProducts = async (req, res) => {
    // res.status(200).json({message: "Route is working fine all!"});
    const products = await Product.find();
    res.status(200).json({
        success:true,
        products
    });
}

