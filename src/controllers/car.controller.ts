import { Request, Response } from "express";
import { CarService } from "../services/car.service";

const service = new CarService();

export const addCar = (req: Request, res: Response) => {
  const { brand, model, pricePerDay } = req.body;
  res.json(service.addCar(brand, model, pricePerDay));
};

export const listCars = (_: Request, res: Response) => {
  res.json(service.listCars());
};
