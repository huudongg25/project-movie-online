import { NextFunction } from "express";
import User from "../entities/user.entity";
declare module "express-serve-static-core" {
  interface Request {
    emailExist?: boolean;
  }
}
const findEmail = async (req: any, res: any, next: NextFunction) => {
  const { email } = req.body;
  const existingUser = await User.findOne({ where: { email } });
  if (existingUser?.dataValues) {
    req.emailExist = true;
  } else {
    req.emailExist = false;
  }
  next();
};

export default findEmail;
