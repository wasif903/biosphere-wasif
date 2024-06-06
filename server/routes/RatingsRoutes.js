import express from "express";
import { Post_ratings_and_Reviews, get_Single_products_Average_ratings, get_products_ratings } from "../controllers/RatingsController.js";


const router = express.Router();


router.post("/post-ratings-and-reviews/:userID/:storeID/:ProductId", Post_ratings_and_Reviews);

router.get("/get-ratings-and-reviews/:userID/:ProductId", get_products_ratings);

router.get("/get_single-product-avgratings/:userID/:ProductId", get_Single_products_Average_ratings);



export default router;