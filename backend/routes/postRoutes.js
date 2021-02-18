import express from "express";
const router = express.Router();
import {
  postNewPost,
  getAllPosts,
  getPostById,
  getUsersPosts,
} from "../controllers/postController.js";
import { protect } from "../middleware/authMiddleware.js";

router.route("/").post(protect, postNewPost).get(getAllPosts).get(getUsersPosts);
router.route("/:id").get(getPostById);

export default router;
