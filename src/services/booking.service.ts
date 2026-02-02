import { BookingRepository } from "../repositories/booking.repository";
import { Booking } from "../models/Booking";
import { randomUUID } from "crypto";

export class BookingService {
  constructor(private repo = new BookingRepository()) {}

  bookCar(userId: string, carId: string, days: number, pricePerDay: number): Booking {
    const booking: Booking = {
      id: randomUUID(),
      userId,
      carId,
      days,
      totalPrice: days * pricePerDay
    };
    return this.repo.create(booking);
  }

  getBookings(): Booking[] {
    return this.repo.findAll();
  }
}
