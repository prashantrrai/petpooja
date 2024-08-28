import { Router } from "express";
import { addCafe, getCafeById, getCafeList } from "../controllers/cafe.js";

const cafeRoute = Router();

cafeRoute.get("/list", getCafeList);
cafeRoute.post("/add", addCafe);
cafeRoute.route("/:id").get(getCafeById)

export default cafeRoute;