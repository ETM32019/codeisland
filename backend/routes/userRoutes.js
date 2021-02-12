import express from "express";
const router = express.Router();
import {
  authUser,
  registerUser,
  getUserProfileById,
} from "../controllers/userController.js";

router.route("/").post(registerUser);
router.post("/login", authUser);
router.get("/:id", getUserProfileById);

export default router;
