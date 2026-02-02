import { Request, Response } from "express";
import { BookingService } from "../services/booking.service";

const service = new BookingService();

export const bookCar = (req: Request, res: Response) => {
  const { userId, carId, days, pricePerDay } = req.body;
  res.json(service.bookCar(userId, carId, days, pricePerDay));
};

export const bookings = (_: Request, res: Response) => {
  res.json(service.getBookings());
};
