import { NextFunction } from "express";
import { body, validationResult } from "express-validator";
import User from "../entities/user.entity";
import { Request } from "express-validator/src/base";
declare module "express-serve-static-core" {
  interface Request {
    emailExist?: boolean;
  }
}
const FIND_EMAIL = async (req: Request, res: any, next: NextFunction) => {
  try {
    const { email }: any = req.body;
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser?.dataValues) {
      req.emailExist = true;
    } else {
      req.emailExist = false;
    }
    next();
  } catch (error) {
    return res
      .status(500)
      .json({ error: "Đã xảy ra lỗi trong quá trình xử lý yêu cầu" });
  }
};

export default FIND_EMAIL;
