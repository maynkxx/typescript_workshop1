import { Request, Response } from "express";
import { AuthService } from "../services/auth.service";

const service = new AuthService();

export const register = (req: Request, res: Response) => {
  const { name, email, password } = req.body;
  res.json(service.register(name, email, password));
};

export const users = (_: Request, res: Response) => {
  res.json(service.getUsers());
};
