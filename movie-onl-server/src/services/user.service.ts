import { Random } from "random-js";
import UserRepository from "../repositories/user.repository";
import { ResponseService, UserType } from "../types/user.type";
import path from "path";
import transporter from "../configs/mail.config";
import ejs from "ejs";
import bcrypt from "bcryptjs";
import { HttpStatus, MSG_ERROR, MSG_SUCCESS } from "../common/msg.error";
import PaidRepository from "../repositories/paid.repository";
import sequelize from "../configs/db.config";

class UserService {
  private userRepository: UserRepository;
  private paidRepository: PaidRepository;
  constructor() {
    this.userRepository = new UserRepository();
    this.paidRepository = new PaidRepository();
  }

  async findAll(
    sort: string,
    limit: number,
    page: number,
    search: string
  ): Promise<ResponseService> {
    try {
      let offset = Math.ceil((page - 1) * limit);

      const result = await this.userRepository.findAll(
        sort,
        limit,
        offset,
        search
      );
      if (result.length > 0) {
        return {
          status: HttpStatus.OK,
          data: result,
          message: MSG_SUCCESS.GET("USER"),
        };
      }
      return {
        status: HttpStatus.NOT_FOUND,
        data: MSG_ERROR.DATA_NOT_FOUND_EXCEPTION,
        message: MSG_ERROR.BAD_REQUEST_EXCEPTION,
      };
    } catch (error) {
      throw error;
    }
  }

  async forgotPassword(email: string): Promise<any> {
    try {
      const random = new Random();

      const pinOtp = random.integer(10000, 99999);

      const dataHtml = await ejs.renderFile(
        path.join("src/views/sendOtp.view.ejs"),
        {
          pin: pinOtp,
        }
      );

      const sendMailToUser = await transporter.sendMail({
        to: email,
        subject: "Movie Online Hello!",
        html: dataHtml,
      });

      let salt = bcrypt.genSaltSync(10);

      let hashRandom = bcrypt.hashSync(String(pinOtp), salt);

      const dataCookie = {
        hash_data: hashRandom,
        email: email,
      };

      return { sendMailToUser, dataCookie };
    } catch (error) {
      throw error;
    }
  }

  async findOneById(id: number): Promise<ResponseService> {
    try {
      const result = await this.userRepository.findOneById(id);
      if (result) {
        return {
          status: HttpStatus.OK,
          data: result,
          message: MSG_SUCCESS.GET("USER"),
        };
      }
      throw {
        status: HttpStatus.NOT_FOUND,
        message: MSG_ERROR.BAD_REQUEST_EXCEPTION,
      };
    } catch (error) {
      throw error;
    }
  }

  async checkPin(pin: string, hashData: string): Promise<boolean> {
    try {
      const compareDataUser = bcrypt.compareSync(
        pin as string,
        hashData as string
      );
      return compareDataUser;
    } catch (error) {
      throw error;
    }
  }

  async resetPassword(
    password: string,
    email: string
  ): Promise<ResponseService> {
    try {
      const emailUser = email;
      const passwordNew = password;
      let salt = bcrypt.genSaltSync(10);
      let hash = bcrypt.hashSync(passwordNew, salt);
      const result = (await this.userRepository.resetPassword(
        emailUser,
        hash
      )) as number[];
      if (result[0] !== 0) {
        return {
          status: HttpStatus.OK,
          success: true,
          message: MSG_SUCCESS.UPDATE("RESET PASSWORD"),
        };
      } else {
        return {
          status: HttpStatus.NOT_FOUND,
          success: false,
          message: MSG_SUCCESS.UPDATE("RESET PASSWORD FAIL"),
        };
      }
    } catch (error) {
      throw error;
    }
  }

  async update(newData: UserType, id: number): Promise<ResponseService> {
    try {
      const result = (await this.userRepository.update(
        id,
        newData
      )) as number[];
      if (result[0] !== 0) {
        return {
          status: HttpStatus.OK,
          success: true,
          message: MSG_SUCCESS.UPDATE("UPDATE USER"),
        };
      } else {
        return {
          status: HttpStatus.NOT_FOUND,
          success: false,
          message: MSG_ERROR.BAD_REQUEST_EXCEPTION,
        };
      }
    } catch (error) {
      throw error;
    }
  }

  // async addMoney(newData: UserType, id: number) {
  //   try {
  //     const dataById = await this.userRepository.findOneById(id);
  //     const newDataUser = {
  //       depositedAmount:
  //         Number(dataById?.dataValues.depositedAmount) +
  //         Number(newData.depositedAmount),
  //     };
  //     if (!dataById) {
  //       throw {
  //         status: HttpStatus.NOT_FOUND,
  //         message: MSG_ERROR.BAD_REQUEST_EXCEPTION,
  //       };
  //     }
  //     const result = await this.userRepository.update(id, newDataUser);
  //     if (result[0] !== 0) {
  //       return {
  //         status: HttpStatus.OK,
  //         success: true,
  //         message: MSG_SUCCESS.UPDATE("UPDATE USER"),
  //       };
  //     } else {
  //       return {
  //         status: HttpStatus.NOT_FOUND,
  //         success: false,
  //         message: MSG_ERROR.BAD_REQUEST_EXCEPTION,
  //       };
  //     }
  //   } catch (error) {
  //     throw error;
  //   }
  // }
}
export default UserService;
