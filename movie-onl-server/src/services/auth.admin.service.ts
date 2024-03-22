import {
  HttpStatus,
  MSG_ERROR,
  MSG_SUCCESS,
  MSG_VALIDATION,
} from "../common/msg.error";
import { UnauthorizedException } from "../exception/index.exception";
import AdminRepository from "../repositories/admin.repository";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

class AuthAdminService {
  private adminRepository: AdminRepository;
  constructor() {
    this.adminRepository = new AdminRepository();
  }

  async create(newDataAdmin: any) {
    try {
      const salt = await bcrypt.genSalt(10);
      const hash = await bcrypt.hash(newDataAdmin.password, salt);

      const { createdAt, updatedAt, password, ...result } = (
        await this.adminRepository.create({
          email: newDataAdmin.email,
          password: hash,
          role: 2,
        })
      ).dataValues;

      return {
        status: HttpStatus.CREATED,
        data: result,
        message: MSG_SUCCESS.CREATED("ADMIN"),
      };
    } catch (error) {
      throw error;
    }
  }

  async login(newDataAdmin: any) {
    try {
      const newData = {
        email: newDataAdmin.email,
        password: newDataAdmin.password,
      };
      const result = await this.adminRepository.findOneByEmail(
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
            message: MSG_SUCCESS.GET("ADMIN"),
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
export default AuthAdminService;
