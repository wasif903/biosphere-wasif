import express from "express";
import { HandleEditUser, HandleSignupUser } from "../controllers/UserControllers.js";


const router = express.Router();

router.post("/signup-user", HandleSignupUser)

router.patch("/edit-user", HandleEditUser)

export default router