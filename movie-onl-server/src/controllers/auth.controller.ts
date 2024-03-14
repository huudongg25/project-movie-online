import { NextFunction, Request, Response } from "express";
import AuthService from "../services/auth.service";
import bcrypt from "bcryptjs";
import { MSG_VALIDATION } from "../common/msg.error";

const authServices = new AuthService();

const register = async (req: Request, res: Response, next: NextFunction) => {
  try {
    if (req?.emailExist === true) {
      return res.status(400).json({
        error: "Bad Request",
        message: "Invalid input data. Please provide valid email and password.",
      });
    }

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(req.body.password, salt);

    const newDataUser = {
      email: req.body.email,
      password: hash,
      address: req.body.address,
      birthDay: req.body.birthDay,
    };

    const createUser = await authServices.register(newDataUser);
    if (createUser) {
      return res
        .status(201)
        .json({ success: true, message: "Account created successfully." });
    }

    throw res
      .status(401)
      .json({ success: false, message: "Account Fail Create." });
  } catch (error) {
    next(error);
  }
};

const login = async (req: Request, res: Response, next: NextFunction) => {
  try {
    if (req?.emailExist === true) {
      const dataUser = {
        email: req?.body?.email,
        password: req?.body?.password,
      };

      const result = await authServices.login(dataUser);

      return res.status(200).json(result);
    }

    throw res.status(401).json(MSG_VALIDATION.UnauthorizedException);
  } catch (error) {
    next(error);
  }
};

export default {
  register,
  login,
};
