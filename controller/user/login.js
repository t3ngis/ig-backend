import { userModel } from "../../Schema/user.schema.js";
import { compare } from "bcrypt";

export const login = (req, res) => {
    const body = req.body;
    const JWT_SECRET = "TEST";
    const { email, password } = body;
    const user = userModel.findOne({ email });

    if (user) {
        const hashedPassword = user.password;
        const isValid = compare(password, hashedPassword);
        if (isValid) {
            const accessToken = jwt_sign(
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
