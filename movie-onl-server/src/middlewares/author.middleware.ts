import { NextFunction, Response } from "express";
const authorLogin = async (req: any, res: Response, next: NextFunction) => {
  if (req.user?.role === 1 && req.user.status === 1) {
    next();
  } else {
    throw res.status(403).json({
      error: "Forbidden",
      message: "You do not have permission to access this resource.",
    });
  }
};

export default authorLogin;
