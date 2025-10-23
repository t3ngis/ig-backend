import { userModel } from "../../Schema/user.schema.js";
import { compare } from "bcrypt";
import jwt from "jsonwebtoken"

export const login = async (req, res) => {
    const JWT_SECRET = "TEST";
    const { email, password } = req.body;
    const user = await userModel.findOne({ email });

    if (user) {
        const hashedPassword = user.password;
        const isValid = await compare(password, hashedPassword);
        if (isValid) {
            const accessToken = jwt.sign(
                {
                    data: user,
                },
                JWT_SECRET,
                { expiresIn: "4h" }
            );

            res.json(accessToken);
        } else {
            res.status(404).json({ message: "wrong password!" });
        }
    } else {
        res.status(404).json({ message: "register" });
    }
};
