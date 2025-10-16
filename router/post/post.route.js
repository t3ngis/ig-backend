import express from 'express'
import { getPosts } from '../../controller/post/get-posts.js'
import { CreatePost } from '../../controller/post/create-posts.js'
import { authMiddleware } from '../../middleWare/authMiddleware.js'

const postRouter = express.Router()

postRouter.get("/", authMiddleware, getPosts)
postRouter.post("/create", authMiddleware, CreatePost)

export default postRouter