import { userModel } from '../../Schema/user.schema.js'

export const signUp = async (req, res) => {
    const body = req.body
    const { username, email, password } = body
    const saltRound = 10
    const hashedPassword = await hash(saltRound, password)
    const isExisting = await userModel.findOne({ email })
    if (isExisting) {
        res.status(400).json({ message: "already isExisting" })
    } else {
        const createdUser = await userModel.create({
            email: email,
            password: hashedPassword,
            username: username
        })
        const accessToken = jwt.sign({
            data: createdUser
        }, JWT_SECRET, { expiresIn: '4h' });

        res.json(accessToken)
    }
}