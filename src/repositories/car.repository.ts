import { Car } from "../models/Car";

export class CarRepository {
  private cars: Car[] = [];

  create(car: Car): Car {
    this.cars.push(car);
    return car;
  }

  findAll(): Car[] {
    return this.cars;
  }
}
