import express from "express"
import mongoose from "mongoose"
import { userModel } from "./Schema/user.schema.js"
import cors from "cors"
import { compare, hash } from "bcrypt"
import { postModel } from "./Schema/post.schema.js"


const app = express()
const PORT = 3333
app.use(express.json())
app.use(cors())

const connectMongoDB = () => {
    mongoose.connect('mongodb+srv://Tengis:tengis_123@cluster0.emlk6gi.mongodb.net/')
}
connectMongoDB()


app.post('/login', async (req, res) => {

    const body = req.body

    const email = body.email
    const password = body.password

    const user = await userModel.findOne({
        email: email
    })
    if (user) {
        const userPassword = user.password;
        const isValid = await compare(password, userPassword)
        if (isValid) {
            res.json(user)
        } else {
            res.status(400).json({ message: "Wrong password" })
        }
    } else {
        res.status(400).json({ message: "User not found" })

    }

})


app.post('/sign-up', async (req, res) => {
    const body = req.body

    const email = body.email
    const password = body.password
    const username = body.username
    const saltRound = 10

    const hashedPassword = await hash(password, saltRound)
    const old = await userModel.findOne({ email: email })

    if (old) {
        res.status(400).json({ message: "user already exist" })
    } else {
        const newUser = await userModel.create({
            email: email,
            password: hashedPassword,
            username: username
        })
        res.json(newUser)
    }

})

app.listen(PORT, () => {
    console.log(`working on http://localhost:${PORT}`)
})
