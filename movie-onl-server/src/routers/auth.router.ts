import express from "express";
import { ENDPOINT } from "./authenEndpoint";
import findEmail from "../middlewares/findEmail.middleware";
import authController from "../controllers/auth.controller";
import validateInput from "../middlewares/validate";
import authLogin from "../middlewares/auth.middleware";

const authRouter = express.Router();

authRouter.post(
  ENDPOINT.REGISTER,
  validateInput,
  findEmail,
  authController.register
);

authRouter.post(ENDPOINT.LOGIN, validateInput, findEmail, authController.login);
export default authRouter;
