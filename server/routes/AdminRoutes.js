import express from "express";
import { HandleCreateAdmin, HandleGetAdmin, HandleGetAllUsers, HandleUpdateAdmin } from "../controllers/AdminController.js";

const router = express.Router();


router.get("/get-users", HandleGetAllUsers);

router.post("/create-admin", HandleCreateAdmin);

router.patch("/update-admin/:id", HandleUpdateAdmin);

router.get("/get-admin", HandleGetAdmin);

export default router;