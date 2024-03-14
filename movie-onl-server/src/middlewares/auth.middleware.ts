import { NextFunction, Response } from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
const authLogin = (req: any, res: Response, next: NextFunction) => {
  try {
    const dataHeader = req.header("Authorization");
    if (!dataHeader) {
      throw res.status(401).json({
        error: "Unauthorized",
        message: "Invalid email or password.",
      });
    }
    const tokenUser: any = dataHeader?.split(" ");
    if (tokenUser?.length !== 2 || tokenUser[0] !== "Bearer") {
      throw res.status(401).json({
        error: "Unauthorized",
        message: "Invalid email or password.",
      });
    }
    jwt.verify(
      tokenUser[1],
      process.env?.JWT as string,
      (err: any, user: any) => {
        if (err) {
          throw res.status(401).json({
            error: "Unauthorized",
            message: "Token is not valid.",
          });
        }
        req.user = user;
        next();
      }
    );
  } catch (error) {
    throw error;
  }
};
export default authLogin;
