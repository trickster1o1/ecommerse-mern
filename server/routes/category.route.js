import express from "express";
import mongoose from "mongoose";
import { createCategory, getCategories, updateCateogry } from "../controllers/category.controller.js";

const router = express.Router();

router.get("/",getCategories);
router.post("/", createCategory);
router.put("/:id",updateCateogry);


export default router;