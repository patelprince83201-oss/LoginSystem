
import usermodel from "../models/user.model.js";
import bcrypt from "bcrypt";

export const registeruser = async (req, res) => {
    try {
        const { username, email, password } = req.body;

        const existinguser = await usermodel.findOne({ email });

        if (existinguser) {
            return res.status(400).json({
                message: "user already exists"
            });
        }

        const hashedpassword = await bcrypt.hash(password, 10);

        const newuser = new usermodel({
                username,
                 email,
            password: hashedpassword
        });

        await newuser.save();

        return res.status(201).json({
            message: "user registered successfully"
        });

    } catch (error) {
        console.error(error);

        return res.status(500).json({
            message: "internal server error"
        });
    }
};
