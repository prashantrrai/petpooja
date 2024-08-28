import express from "express";
import cors from "cors";

// Extracting files and configurations
import { config } from 'dotenv';
config({
    path: "./.env",
});
const DB_URI = process.env.MONGO_URI || `mongodb+srv://${process.env.dbUSER}:${process.env.dbUserPassword}@petpooja-cluster.yrapr.mongodb.net/?retryWrites=true&w=majority&appName=petpooja-cluster`;
import ConnectionDB from "./src/db/connection.js";
ConnectionDB(DB_URI);

// Import Routes
import userRouter from "./src/routes/user.js";
import authRouter from "./src/routes/auth.js"

// setting configurations
const app = express();
const PORT = process.env.PORT || 4040;
const API_PATH = process.env.API_PATH || '/api/v1';

// middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Create a new router for /api/v1 & Use Routes as middlewares
const apiRouter = express.Router();

// Use the apiRouter DEFAULT
app.use('/api/v1', apiRouter);


// Module Wise Route
apiRouter.use('/user', userRouter);
apiRouter.use('/auth', authRouter);


// Default route
app.get(`/${API_PATH}`, (req, res) => {
    res.json({
        success: true,
        message: "Welcome to PetPooja"
    });
});

// Server listening
app.listen(PORT, () => {
    console.log(`Server is Listening on http://localhost:${PORT}/${API_PATH}`);
});