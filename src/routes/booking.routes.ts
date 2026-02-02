import { Router } from "express";
import { bookCar, bookings } from "../controllers/booking.controller";

const router = Router();
router.post("/", bookCar);
router.get("/", bookings);

export default router;
