import { User } from "@prisma/client";
import { CreateUserInput } from "../dto/create-user.input";

interface IUserRepository {
  create(data: CreateUserInput): Promise<User>;
  getAll(): Promise<User[]>;
  getOne(): Promise<User>;
}

export { IUserRepository }