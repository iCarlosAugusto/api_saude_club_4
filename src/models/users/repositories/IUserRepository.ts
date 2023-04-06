import { User } from "@prisma/client";
import { CreateUserInput } from "../dto/create-user.input";
import { UpdateUserInput } from "../dto/update-user.input";

interface IUserRepository {
  create(data: CreateUserInput): Promise<User>;
  findOne(id: string): Promise<User>;
  update(data: UpdateUserInput): Promise<User>;
}

export { IUserRepository }