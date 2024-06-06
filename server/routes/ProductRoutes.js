import express from "express";
import { HandleCreateProduct, HandleDeleteProduct, HandleGetAllProducts, HandleGetProducyByQuery, HandleGetSingleProduct, HandleUpdateProduct } from "../controllers/ProductController.js";


const router = express.Router();


router.post('/create-product/:storeID', HandleCreateProduct);

router.patch('/update-product/:storeID', HandleUpdateProduct);

router.get('/get-products/:storeID', HandleGetAllProducts);

router.get('/get-all-products', HandleGetAllProducts);

router.get('/get-single-product/:slug', HandleGetSingleProduct);

router.delete('/delete-product/:storeID/:prodID/:slug', HandleDeleteProduct);

router.get("/get-products-by-query", HandleGetProducyByQuery)


export default router;