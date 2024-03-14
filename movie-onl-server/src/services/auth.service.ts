import { log } from "console";
import UserService from "./user.service";
import jwt from "jsonwebtoken";
import { UserType } from "../types/user.type";
import { DatabaseConnectionError } from "../exception/index.exception";

class AuthService {
  private userService: UserService;
  constructor() {
    this.userService = new UserService();
  }

  async register(newDataUser: UserType): Promise<unknown> {
    try {
      return await this.userService.create(newDataUser);
    } catch (error) {
      if (error instanceof DatabaseConnectionError) {
        throw error;
      } else {
        console.log(error);
        throw error;
      }
    }
  }
}
export default AuthService;
