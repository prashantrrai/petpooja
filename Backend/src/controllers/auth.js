import { Users } from "../models/user.js";

export const login = async (req, res) => {
    try {
        const { phone, password } = req.body;


        if (!password || !phone) {
            return res.status(400).json({
                success: false,
                message: "Phone and Password is required"
            });
        }

        let user = await Users.findOne({ phone: phone });

        if (!user) {
            throw new Error('Sorry, User Not Found');
        }

        if (password != user.password) {
            throw new Error('Sorry, Invalid password');
        }

        res.status(200).json({
            success: true,
            message: "Login Successfully"
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
};
