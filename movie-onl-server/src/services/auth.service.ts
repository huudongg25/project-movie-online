import UserService from "./user.service";
import { ResponseLogin, UserType } from "../types/user.type";
import {
  DatabaseConnectionError,
  UnauthorizedException,
} from "../exception/index.exception";
import { MSG_ERROR, MSG_VALIDATION } from "../common/msg.error";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

class AuthService {
  private userService: UserService;
  constructor() {
    this.userService = new UserService();
  }

  async register(newDataUser: UserType): Promise<UserType> {
    try {
      return await this.userService.create(newDataUser);
    } catch (error) {
      if (error instanceof DatabaseConnectionError) {
        throw error;
      } else {
        throw error;
      }
    }
  }

  async login(dataUser: UserType): Promise<ResponseLogin> {
    try {
      const result = await this.userService.findOneByEmail(dataUser?.email);

      if (result) {
        const compareDataUser = bcrypt.compareSync(
          dataUser.password as string,
          result.password as string
        );

        if (compareDataUser) {
          const { password, createdAt, updatedAt, ...userData } = result;
          const accessToken = jwt.sign(userData, process.env?.JWT as string);

          return {
            data: userData,
            accessToken,
          };
        }

        throw new UnauthorizedException(
          MSG_VALIDATION.UnauthorizedException,
          401
        );
      }
      throw new UnauthorizedException(MSG_ERROR.UnauthorizedException, 401);
    } catch (error) {
      throw error;
    }
  }
}
export default AuthService;
