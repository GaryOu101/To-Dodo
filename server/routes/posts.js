import express from "express";
import {getFeedPosts, getUserPosts, likePost } from "../controllers/posts.js";
import {verifyToken } from "../middleware/auth.js";

const router = express.Router();


/* Read */
router.get("/", verifyToken, getFeedPosts);     //home page. shows everyone's post
router.get("/:userId/posts", verifyToken, getUserPosts); //specific user's page. show's only his posts

/* UPDATE */
router.patch("/:id/like", verifyToken, likePost);

export default router;