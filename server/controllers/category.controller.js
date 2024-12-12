import Category from '../models/category.model.js';
import mongoose from "mongoose";

export const getCategories = async (req,res) => {
    try {
        const categories = await Category.find({});
        return res.status(200).json({success: true, categories});
    } catch (error) {
        return res.status(200).json({success: false, msg: error.message});        
    }
}

export const createCategory = async (req,res) => {
    const category = {...req.body, slug: req.body.title.toLowerCase().replaceAll(" ","-")};
    if(!category.title) {
        return res.status(400).json({success: false, msg: 'Please enter a category title!'});
    }
    const newCat = new Category(category)
    try {
        await newCat.save();
        return res.status(200).json({success: true, category: newCat});
    } catch (error) {
        return res.status(500).json({success: false, msg: error.message});
    }
}

export const updateCateogry = async (req,res) => {
    const {id} = req.params;
    const cat = req.body;
    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({success: false, msg: 'Product not found!'});
    }
    try {
        const category = await Category.findByIdAndUpdate(id, cat, {new: true});
        return res.status(200).json({success: true, category});
    } catch (error) {
        return res.status(500).json({success: false, msg: error.message});
    }
}