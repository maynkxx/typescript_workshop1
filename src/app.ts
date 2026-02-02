import express, { Application, Request, Response } from "express";
import cors from "cors";

import authRoutes from "./routes/auth.routes";
import bookingRoutes from "./routes/booking.routes";
import carRoutes from "./routes/car.routes";
import { errorHandler } from "./middlewares/error.middleware";

const app: Application = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/bookings", bookingRoutes);
app.use("/api/cars", carRoutes);


app.get("/", (_req: Request, res: Response) => {
  res.send("Car Rental Backend is running 🚗");
});

app.use(errorHandler);

export default app;
