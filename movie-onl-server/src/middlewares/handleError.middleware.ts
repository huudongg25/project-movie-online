import { Request, Response, NextFunction } from "express";
import {
  AuthencationException,
  ValidationException,
} from "../exception/index.exception";
import { HttpStatus, MSG_ERROR } from "../common/msg.error";

const handleError = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!err) {
    return next();
  }

  if (
    err instanceof AuthencationException ||
    err instanceof ValidationException
  ) {
    return res.status(err.statusCode).json({
      message: err.message,
      errors: err.field,
    });
  }

  return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
    message: err.message,
  });
};

export default handleError;
