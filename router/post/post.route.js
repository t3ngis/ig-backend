import express from "express";
import { getPosts } from "../../controller/post/get-posts.js";
import { CreatePost } from "../../controller/post/create-posts.js";
import { authMiddleware } from "../../middleWare/authMiddleware.js";
import { togglePostLike } from "../../controller/post/toggle-post-like.js";

const postRouter = express.Router();

postRouter.get("/getPosts", authMiddleware, getPosts);
postRouter.post("/createPost", authMiddleware, CreatePost);
postRouter.post("/toggle-like/:postId", authMiddleware, togglePostLike);

export default postRouter;
