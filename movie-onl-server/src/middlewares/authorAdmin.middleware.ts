import { NextFunction, Response } from "express";
import { UnauthorizedException } from "../exception/index.exception";
import { HttpStatus, MSG_ERROR } from "../common/msg.error";
const authorAdminLogin = async (
  req: any,
  res: Response,
  next: NextFunction
) => {
  if (req.user?.role === 2) {
    next();
  } else {
    throw new UnauthorizedException(
      MSG_ERROR.UNAUTHORZIED_EXCEPTION,
      HttpStatus.UNAUTHORIZED
    );
  }
};

export default authorAdminLogin;
