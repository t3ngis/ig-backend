import { postModel } from "../Schema/post.schema.js"

export const CreatePost = async (req, res) => {
    const body = req.body
    const user = req.user

    const { caption, images } = body
    const createdPost = await postModel.create({
        caption,
        images,
        user: user._id,
    })

    res.status(200).json(createdPost)
}