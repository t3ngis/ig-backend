import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import userRouter from "./router/user/user.route.js"
import postRouter from "./router/post/post.route.js"


const app = express()
const PORT = 3333
app.use(express.json())
app.use(cors())

const connectMongoDB = () => {
    mongoose.connect('mongodb+srv://Tengis:tengis_123@cluster0.emlk6gi.mongodb.net/')
}
connectMongoDB()

app.use("/", userRouter)
app.use("/", postRouter)


app.listen(PORT, () => {
    console.log(`working on http://localhost:${PORT}`)
})
