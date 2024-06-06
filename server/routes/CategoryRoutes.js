import express from "express";
import { HandleCreateCategory, HandleGetAllCategories, HandleGetCategories, HandleGetSingleCategory } from "../controllers/CategoryController.js";

const router = express.Router();


router.post("/create-category/:adminID", HandleCreateCategory)

router.get("/get-populated-categories", HandleGetCategories)

router.get("/get-categories", HandleGetAllCategories)

router.get("/get-category/:slug", HandleGetSingleCategory)

export default router