import { Request, Response, NextFunction } from "express";
import {
  AuthencationException,
  ValidationException,
} from "../exception/index.exception";

const handleError = (err: Error, res: Response, next: NextFunction) => {
  console.error("Error occurred:", err);

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

  return res.status(500).json({
    message: "Internal Server Error",
  });
};

export default handleError;
