import express from "express";
import { ENDPOINT } from "./authenEndpoint";
import findEmail from "../middlewares/findEmail.middleware";
import validateInput from "../middlewares/validate";
import AuthController from "../controllers/auth.controller";

const authRouter = express.Router();

const authController = new AuthController();

authRouter.post(
  ENDPOINT.REGISTER,
  validateInput,
  findEmail,
  authController.register
);

authRouter.post(ENDPOINT.LOGIN, validateInput, findEmail, authController.login);
export default authRouter;
