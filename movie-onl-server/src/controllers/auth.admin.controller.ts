import AuthAdminService from "../services/auth.admin.service";
import { NextFunction, Request, Response } from "express";
import { HttpStatus, MSG_ERROR, MSG_VALIDATION } from "../common/msg.error";
import { BadRequestException } from "../exception/index.exception";
const authAdminService = new AuthAdminService();

class AuthAdminController {
  async create(req: Request, res: Response, next: NextFunction) {
    try {
      if (req?.emailExist === true) {
        throw new BadRequestException(
          MSG_ERROR.EMAIL_ERROR,
          HttpStatus.BAD_REQUEST
        );
      }

      const { status, ...result } = await authAdminService.create({
        ...req.body,
      });
      res.status(status as number).json(result);
    } catch (error) {
      next(error);
    }
  }

  async login(req: Request, res: Response, next: NextFunction) {
    try {
      const { status, ...result } = await authAdminService.login({
        ...req.body,
      });
      res.status(status as number).json(result);
    } catch (error) {
      next(error);
    }
  }
}
export default AuthAdminController;
