import express from "express";
const router = express.Router();
import {
  postNewPost,
  getAllPosts,
  getPostById,
} from "../controllers/postController.js";
import { protect } from "../middleware/authMiddleware.js";

router.route("/").post(protect, postNewPost).get(getAllPosts);
router.route("/:id").get(getPostById);

export default router;
