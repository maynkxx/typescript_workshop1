import { Router } from "express";
import { addCar, listCars } from "../controllers/car.controller";

const router = Router();
router.post("/", addCar);
router.get("/", listCars);

export default router;
