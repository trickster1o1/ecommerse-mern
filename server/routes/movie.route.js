import express from "express";
import mongoose from "mongoose";
import Movie from '../models/movie.model.js';
import { createProduct, deleteProduct, getBanner, getProducts, updateProduct } from "../controllers/movie.controller.js";

const router = express.Router();

router.get('/', getProducts);

router.get('/banners', getBanner);

router.post("/", createProduct);

router.put('/:id', updateProduct);

router.delete('/:id', deleteProduct);




export default router;