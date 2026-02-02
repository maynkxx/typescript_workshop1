import { User } from "../models/User";

export class UserRepository {
  private users: User[] = [];

  create(user: User): User {
    this.users.push(user);
    return user;
  }

  findByEmail(email: string): User | undefined {
    return this.users.find(u => u.email === email);
  }

  findAll(): User[] {
    return this.users;
  }
}
