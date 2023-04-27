import UserRepository from "../repositories/user.repository";
import { IUser } from "../models/user.model";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { validateUserData } from "../middleware/validation.middleware";

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
    const validUser = validateUserData(user);

    if (validUser.error) {
      throw new Error(validUser.error.message);
    }

    if (user.password) {
      user.password = await bcrypt.hash(user.password, 10);
    }
    return UserRepository.create(user);
  }

  remove(username: string) {
    return UserRepository.remove(username);
  }

  update(username: string, user: Partial<IUser>) {
    return UserRepository.update(username, user);
  }

  async authorization(username: string, password: string) {
    const user = await UserRepository.getByUsername(username);

    if (!user) throw new Error("Usuário Não Encontrado!");

    const result = await bcrypt.compare(password, user.password);

    if (result) {
      return jwt.sign({ username: user.username, _id: user._id }, secretJWT, {
        expiresIn: "1h",
      });
    }

    throw new Error("Falha na Autenticação!");
  }
}

export default new UsersService();
