import { ICreateUserDTO } from "../dtos/ICreateUserDTO";
import { User } from "../infra/typeorm/entities/User";

interface IUsersRepository {
  create(data: ICreateUserDTO): Promise<void>;
  list(): Promise<User[]>;
  findById(id: string): Promise<User>;
  findByName(name: string): Promise<User>;
  findByEmail(email: string): Promise<User>;
}

export { IUsersRepository };