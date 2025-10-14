import { userModel } from '../../Schema/user.schema.js'
import jwt from 'jsonwebtoken'

export const getPosts = (req, res) => {
    const authHeader = req.headers.authorization

    const accessToken = authHeader.split("")[1]


    const user = jwt.verify(accessToken, 'TEST')


    const posts = userModel.find().populate('user')


    res.status(200).json(posts)
}