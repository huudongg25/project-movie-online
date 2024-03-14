import { Request, Response, NextFunction } from "express";
import { body, validationResult } from "express-validator";

const validateInput = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  await Promise.all([
    body("email").isEmail().withMessage("Email không hợp lệ").run(req),
    body("password")
      .isLength({ min: 6, max: 25 })
      .withMessage("Mật khẩu phải từ 6 đến 25 ký tự")
      .run(req),
  ]);

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      error: "Bad Request",
      message: "Invalid input data. Please provide valid email and password.",
    });
  }
  next();
};

export default validateInput;
