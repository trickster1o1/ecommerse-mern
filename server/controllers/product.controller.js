import Product from '../models/product.model.js';
import mongoose from "mongoose";

export const getProducts = async (req,res) => {
    try {
        const products = await Product.find({});
        return res.status(200).json({success: true, products});
    } catch (error) {
        return res.status(500).json({success: false, msg: error.message});
    }
}

export const createProduct = async (req,res) => {
    const product = req.body;

    if(!product.name || !product.price || !product.image) {
        return res.status(400).json({success: false, msg: 'Please provide all the fields!'});
    }

    const newProduct = new Product(product);

    try {
        await newProduct.save();
        res.status(201).json({success:true, data: newProduct});
    } catch (error) {
        console.error("Error Create: ",error.message);
        res.status(500).json({success: false, msg: 'Server Error'});
    }
}

export const updateProduct = async (req,res) => {
    const {id} = req.params;
    const product = req.body;
    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({success: false, msg: 'Product not found!'});
    }
    try {
        const prod = await Product.findByIdAndUpdate(id, product, {new: true});
        return res.status(200).json({success: true, prod: prod});
    } catch (error) {
        return res.status(404).json({success: false, msg: 'Server Error!'});
    }
}

export const deleteProduct =  async (req,res) => {
    const {id} = req.params;
    
    try {
        await Product.findByIdAndDelete(id);
        return res.status(200).json({success: true, msg:'Product Deleted!!!'});        
    } catch (error) {
        return res.status(404).json({success: false, msg:'Product Not Found!!!'});        
    }
}