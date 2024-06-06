import express from "express";
import { HandleGetStores, HandleKYCStatus, HandleKYCStore, HandleOTPVerifyStore, HandleSignupStore, HandleUpdateStore } from "../controllers/StoreOwnerController.js";


const router = express.Router();


router.post("/signup-store", HandleSignupStore);

router.patch("/update-store/:id", HandleUpdateStore);

router.patch("/otp-verify-store", HandleOTPVerifyStore);

router.post("/verify-kyc/:id", HandleKYCStore)

router.patch("/kyc-status/:storeID/:kycID", HandleKYCStatus)

router.get("/get-stores", HandleGetStores)

export default router