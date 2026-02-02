import { UserRepository } from "../repositories/user.repository";
import { User } from "../models/User";
import { randomUUID } from "crypto";

export class AuthService {
  constructor(private repo = new UserRepository()) {}

  register(name: string, email: string, password: string): User {
    const user: User = {
      id: randomUUID(),
      name,
      email,
      password
    };
    return this.repo.create(user);
  }

  getUsers(): User[] {
    return this.repo.findAll();
  }
}
