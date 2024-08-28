import { Cafe } from "../models/cafe.js";

export const getCafeList = async (req, res) => {
    try {
        const cafes = await Cafe.find({});

        return res.status(200).json({
            success: true,
            message: "Data Fetched Successfully",
            response: cafes
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

export const addCafe = async (req, res) => {
    try {
        const { Name, Address } = req.body;

        // let cafe = await cafe.findOne({ name: name });

        // if (cafe) {
        //     return res.status(409).json({
        //         success: false,
        //         message: `${cafe.name} Already Exists!`,
        //     });
        // };

        if (!Name || !Address) {
            return res.status(400).json({
                success: false,
                message: "Please add all required fields"
            });
        }

        let cafe = await Cafe.create({
            Name,
            Address
        });

        return res.status(201).json({
            success: true,
            message: `Cafe Added Successfully`,
            response: cafe
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
}

export const getCafeById = async (req, res) => {
    try {
        const id = req.params.id;
        const cafe = await Cafe.findById(id);

        if (!cafe) return res.status(400).json({
            success: false,
            message: "Invalid ID"
        });

        return res.status(200).json({
            success: true,
            message: "Data Fetched Successfully",
            response: cafe
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
};