import UserRepository from "../repositories/user.repository";
import { IUser } from "../models/user.model";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const secretJWT = process.env.JWT_SECRET_KEY || "";

class UsersService {
  getAll() {
    return UserRepository.getAll();
  }

  getByUsername(username: string) {
    return UserRepository.getByUsername(username);
  }

  async create(user: IUser) {
    if (user.password) {
      user.password = await bcrypt.hash(user.password, 10);
    }
    return UserRepository.create(user);
  }

  async remove(username: string) {
    return UserRepository.remove(username);
  }

  update(username: string, user: Partial<IUser>) {
    return UserRepository.update(username, user);
  }
}

export default new UsersService();
