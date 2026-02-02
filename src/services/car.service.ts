import { CarRepository } from "../repositories/car.repository";
import { Car } from "../models/Car";
import { randomUUID } from "crypto";

export class CarService {
  constructor(private repo = new CarRepository()) {}

  addCar(brand: string, model: string, pricePerDay: number): Car {
    return this.repo.create({
      id: randomUUID(),
      brand,
      model,
      pricePerDay
    });
  }

  listCars(): Car[] {
    return this.repo.findAll();
  }
}
