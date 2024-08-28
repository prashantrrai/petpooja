import { Router } from "express";
import { AddUser, deleteUser, editUser, getAllUsers, getUserById } from "../controllers/user.js";

const userRoute = Router();

userRoute.get("/list", getAllUsers);
userRoute.post("/register", AddUser);
userRoute.route("/:id").get(getUserById).delete(deleteUser).put(editUser);

export default userRoute;