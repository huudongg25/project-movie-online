import { NextFunction, Request, Response } from "express";
import AuthService from "../services/auth.service";
import { HttpStatus, MSG_ERROR, MSG_VALIDATION } from "../common/msg.error";
import {
  BadRequestException,
  ValidationException,
} from "../exception/index.exception";
const authServices = new AuthService();

class AuthController {
  async register(req: Request, res: Response, next: NextFunction) {
    try {
      if (req?.emailExist === true) {
        throw new BadRequestException(
          MSG_ERROR.EMAIL_ERROR,
          HttpStatus.BAD_REQUEST
        );
      }

      const { status, ...result } = await authServices.register({
        ...req.body,
      });
      res.status(status as number).json(result);
    } catch (error) {
      next(error);
    }
  }

  async login(req: Request, res: Response, next: NextFunction) {
    try {
      if (req?.emailExist === true) {
        const { status, ...result } = await authServices.login({
          ...req.body,
        });
        res.status(status as number).json(result);
      } else {
        throw new ValidationException(
          MSG_VALIDATION.UNAUTHORZIED_EXCEPTION,
          HttpStatus.BAD_REQUEST
        );
      }
    } catch (error) {
      next(error);
    }
  }
}

export default AuthController;
