import express from "express";
import { ENDPOINT } from "./authenEndpoint";
import validateInputRegister from "../middlewares/validateRegister";
import findEmail from "../middlewares/findEmail.middleware";
import authController from "../controllers/auth.controller";

const authRouter = express.Router();

authRouter.post(
  ENDPOINT.REGISTER,
  validateInputRegister,
  findEmail,
  authController.register
);

export default authRouter;
