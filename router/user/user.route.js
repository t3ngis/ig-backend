import express from "express"
import { login } from "../../controller/user/login.js"
import { signUp } from "../../controller/user/signUp.js"


const userRouter = express.Router()

userRouter.post("/login", login)
userRouter.post("/sign-up", signUp)

export default userRouter 