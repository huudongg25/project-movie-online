import { ResponseLogin, ResponseService, UserType } from "../types/user.type";
import { UnauthorizedException } from "../exception/index.exception";
import {
  HttpStatus,
  MSG_ERROR,
  MSG_SUCCESS,
  MSG_VALIDATION,
} from "../common/msg.error";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import UserRepository from "../repositories/user.repository";
dotenv.config();

class AuthService {
  private userRepository: UserRepository;
  constructor() {
    this.userRepository = new UserRepository();
  }

  async register(newDataUser: UserType): Promise<ResponseService> {
    try {
      const salt = await bcrypt.genSalt(10);
      const hash = await bcrypt.hash(newDataUser?.password as string, salt);

      const newData = {
        email: newDataUser.email,
        password: hash,
        address: newDataUser.address,
        birthDay: newDataUser.birthDay,
      };
      const { createdAt, updatedAt, password, ...result } = (
        await this.userRepository.create(newData)
      ).dataValues;
      return {
        status: HttpStatus.CREATED,
        data: result,
        message: MSG_SUCCESS.CREATED("USER"),
      };
    } catch (error) {
      throw error;
    }
  }

  async login(dataUser: UserType): Promise<ResponseLogin> {
    try {
      const newData = {
        email: dataUser.email,
        password: dataUser.password,
      };
      const result = await this.userRepository.findOneByEmail(
        newData?.email as string
      );

      if (result) {
        const compareDataUser = bcrypt.compareSync(
          newData.password as string,
          result.dataValues.password as string
        );

        if (compareDataUser) {
          const { password, createdAt, updatedAt, ...userData } =
            result?.dataValues;
          const accessToken = jwt.sign(userData, process.env?.JWT as string);

          return {
            status: HttpStatus.OK,
            message: MSG_SUCCESS.GET("USER"),
            data: userData,
            accessToken,
          };
        }

        throw new UnauthorizedException(
          MSG_VALIDATION.UNAUTHORZIED_EXCEPTION,
          HttpStatus.BAD_REQUEST
        );
      }
      throw new UnauthorizedException(
        MSG_ERROR.UNAUTHORZIED_EXCEPTION,
        HttpStatus.BAD_REQUEST
      );
    } catch (error) {
      throw error;
    }
  }
}
export default AuthService;
