import { Booking } from "../models/Booking";

export class BookingRepository {
  private bookings: Booking[] = [];

  create(booking: Booking): Booking {
    this.bookings.push(booking);
    return booking;
  }

  findAll(): Booking[] {
    return this.bookings;
  }
}
