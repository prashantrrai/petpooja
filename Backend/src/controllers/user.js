import { Users } from "../models/user.js";


export const AddUser = async (req, res) => {
    try {
        const { firstName, lastName, email, password, gender, phone } = req.body;

        let user = await Users.findOne({ phone: phone });

        if (user) {
            return res.status(409).json({
                success: false,
                message: `${user.phone} Already Exists!`,
            });
        };

        if (!firstName || !lastName || !email || !password || !phone) {
            return res.status(400).json({
                success: false,
                message: "Please add all required fields"
            });
        }

        user = await Users.create({
            firstName,
            lastName,
            email,
            password,
            gender,
            phone
        });

        return res.status(201).json({
            success: true,
            message: `Welcome, ${user.firstName}`,
            response: user
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
}

export const getAllUsers = async (req, res) => {
    try {
        const users = await Users.find({});

        return res.status(200).json({
            success: true,
            message: "Data Fetched Successfully",
            response: users
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

export const getUserById = async (req, res) => {
    try {
        const id = req.params.id;
        const user = await Users.findById(id);

        if (!user) return res.status(400).json({
            success: false,
            message: "Invalid ID"
        });

        return res.status(200).json({
            success: true,
            message: "Data Fetched Successfully",
            response: user
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

export const deleteUser = async (req, res) => {
    try {
        const id = req.params.id;
        const user = await Users.findById(id);

        if (!user) return res.status(400).json({
            success: false,
            message: `Invalid ID`,
        });

        await Users.deleteOne();

        return res.status(200).json({
            success: true,
            message: "User Deleted Successfully",
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

export const editUser = async (req, res) => {
    try {
        const { firstName, lastName, email, password, gender, phone } = req.body;
        const { id } = req.params;


        let user = await Users.findOne({ _id: id });

        if (!user)
            return res.status(404).json({
                success: false,
                message: `User Not Found`,
            });

        let updatedUser = await Users.findByIdAndUpdate({ _id: id }, {
            firstName,
            lastName,
            email,
            password,
            gender,
            phone
        },
            { new: true, runValidators: true }
        );

        return res.status(200).json({
            success: true,
            message: `User Updated Successfully`,
            response: updatedUser
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
}