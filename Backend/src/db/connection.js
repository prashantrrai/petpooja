import mongoose from "mongoose";

const ConnectionDB = async (URI) => {
    try {
        await mongoose.connect(URI, {
            dbName: "PetPooja",
        });
        console.log("MongoDB CONNECTED");
    } catch (error) {
        console.error("DB CONNECTION ERROR:", error);
    }
};

export default ConnectionDB;