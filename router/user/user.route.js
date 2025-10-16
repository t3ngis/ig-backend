import express from "express"
import { authMiddleware } from "../../middleWare/authMiddleware.js"

const userRouter = express.Router()

userRouter.get("/", authMiddleware, getUsers)
userRouter.post("/create", authMiddleware, createUser)

export default userRouter 