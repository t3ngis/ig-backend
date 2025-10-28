import express from "express";
import { getPosts } from "../../controller/post/get-posts.js";
import { CreatePost } from "../../controller/post/create-posts.js";
import { authMiddleware } from "../../middleWare/authMiddleware.js";

const postRouter = express.Router();

postRouter.get("/getPosts", authMiddleware, getPosts);
postRouter.post("/createPost", authMiddleware, CreatePost);

export default postRouter;
