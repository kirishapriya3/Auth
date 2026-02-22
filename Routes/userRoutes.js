import express from "express";
import {
  registerUser,
  loginUser,
  getUserProfile,
} from "../Controllers/userController.js";
import { verifyToken } from "../Middleware/authMiddleware.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/profile", verifyToken, getUserProfile);

export default router;