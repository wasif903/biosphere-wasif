import express from "express";
import { HandleCreatePlan, HandleDeletePlan, HandleGetPlans, HandleUpdatePlan } from "../controllers/PackageControllers.js";


const router = express.Router();


router.post("/create-plan", HandleCreatePlan);

router.patch("/update-plan/:id", HandleUpdatePlan);

router.get("/get-plans", HandleGetPlans);

router.delete("/delete-plan/:storeID/:id", HandleDeletePlan);

export default router