import express from "express";
import { Router } from "express";
import { loginUser, registerUser,updateProfile,uploadProfilePicture,userProfile } from "../controllers/user.controller.js";
import { authGuard } from "../middlewares/authMiddleware.js";
import { uploadPicture } from "../middlewares/uploadPictureMiddleware.js";
const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/profile", authGuard , userProfile );
router.put('/update',authGuard,updateProfile);
router.put('/uploadProfilePicture',authGuard,uploadProfilePicture)

export default router;