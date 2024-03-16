import { NextFunction, Response } from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import {
  AuthencationException,
  UnauthorizedException,
} from "../exception/index.exception";
dotenv.config();
const authLogin = (req: any, res: Response, next: NextFunction) => {
  const dataHeader = req.header("Authorization");
  if (!dataHeader) {
    throw new AuthencationException("UnAuthorization");
  }
  const tokenUser: any = dataHeader?.split(" ");
  if (tokenUser?.length !== 2 || tokenUser[0] !== "Bearer") {
    throw new UnauthorizedException("Fobidden");
  }
  jwt.verify(
    tokenUser[1],
    process.env?.JWT as string,
    (err: any, user: any) => {
      if (err) {
        throw new UnauthorizedException("Not Access Token");
      }
      req.user = user;
      next();
    }
  );
};
export default authLogin;
