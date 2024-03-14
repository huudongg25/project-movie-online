import { Request, Response } from "express";
import AuthService from "../services/auth.service";
import bcrypt from "bcryptjs";

const authServices = new AuthService();

const register = async (req: Request, res: Response) => {
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
    return res
      .status(401)
      .json({ success: false, message: "Account Fail Create." });
  } catch (error) {
    return res
      .status(500)
      .json({ error: "Đã xảy ra lỗi trong quá trình xử lý yêu cầu" });
  }
};

export default {
  register,
};
