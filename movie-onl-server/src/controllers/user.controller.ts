import { NextFunction, Request, Response } from "express";
import UserService from "../services/user.service";
import { UnauthorizedException } from "../exception/index.exception";
import { HttpStatus, MSG_ERROR, MSG_SUCCESS } from "../common/msg.error";

const userServices = new UserService();

class UserController {
  async findAllUser(req: Request, res: Response, next: NextFunction) {
    try {
      const sort = req.query.sort || "ASC";
      const limit = Number(req.query.limit) || 3;
      const page = req.query.page || 1;
      const search = req.query.search || "";
      const { status, ...result } = await userServices.findAll(
        sort as string,
        limit as number,
        page as number,
        search as string
      );
      res.status(status as number).json(result);
    } catch (error) {
      console.log(error);

      next(error);
    }
  }

  async findOneUser(req: Request, res: Response, next: NextFunction) {
    try {
      const id = Number(req.params.id);
      const { status, ...result } = await userServices.findOneById(id);
      res.status(status as number).json(result);
    } catch (error) {
      next(error);
    }
  }

  async forgotPassword(req: Request, res: Response, next: NextFunction) {
    try {
      if (req.emailExist === true) {
        const result = await userServices.forgotPassword(req.body.email);
        if (result?.sendMailToUser) {
          res.cookie("otp", result?.dataCookie, {
            expires: new Date(Date.now() + 120000),
            httpOnly: true,
            path: "http://localhost:8000/api/v1/users/check-pin",
          });
          return res.status(HttpStatus.OK).json({
            success: true,
            message: MSG_SUCCESS.CREATED("OTP"),
          });
        }
      }
    } catch (error) {
      next(error);
    }
  }

  async checkPin(req: Request, res: Response, next: NextFunction) {
    try {
      const compareDataUser = await userServices.checkPin(
        req.body.pin,
        req.cookies.otp?.hash_data
      );
      if (compareDataUser) {
        res.cookie(
          "pin",
          { status: true },
          {
            expires: new Date(Date.now() + 120000),
            httpOnly: true,
          }
        );
        return res.status(HttpStatus.OK).json({
          success: true,
          message: MSG_SUCCESS.CREATED("OTP"),
        });
      } else {
        res.cookie(
          "pin",
          { status: false },
          {
            expires: new Date(Date.now() + 120000),
            httpOnly: true,
          }
        );

        return res.status(HttpStatus.OK).json({
          success: false,
          message: MSG_ERROR.FORBIDDEN_EXCEPTION,
        });
      }
    } catch (error) {
      next(error);
    }
  }

  async resetPassword(req: Request, res: Response, next: NextFunction) {
    try {
      const compareDataUser = req.cookies?.pin?.status;
      if (compareDataUser) {
        const { status, ...result } = await userServices.resetPassword(
          req.body?.password,
          req.cookies?.otp?.email
        );
        res.status(status as number).json({
          result,
        });
      } else {
        return new UnauthorizedException("Fail Pin", HttpStatus.NOT_FOUND);
      }
    } catch (error) {
      return next(error);
    }
  }

  async uploadAvatar(req: Request, res: Response, next: NextFunction) {
    try {
      const id = Number(req.params.id);

      const avatar = req.file?.path as string;

      const { status, ...result } = await userServices.update({ avatar }, id);
      res.status(status as number).json(result);
    } catch (error) {
      next(error);
    }
  }

  async updateProfile(req: Request, res: Response, next: NextFunction) {
    try {
      const id = Number(req.params.id);

      const { status, ...result } = await userServices.update(
        { ...req.body },
        id
      );
      res.status(status as number).json(result);
    } catch (error) {
      next(error);
    }
  }

  async changeStatus(req: Request, res: Response, next: NextFunction) {
    try {
      const id = Number(req.params.id);
      const { status, ...result } = await userServices.update(
        { status: req.body.status },
        id
      );
      res.status(status as number).json(result);
    } catch (error) {
      next(error);
    }
  }

  async addMoney(req: Request, res: Response, next: NextFunction) {
    try {
      const id = Number(req.params.id);
      const { status, ...result } = await userServices.addMoney(
        { ...req.body },
        id
      );
      res.status(status).json(result);
    } catch (error) {
      next(error);
    }
  }
}

export default UserController;
