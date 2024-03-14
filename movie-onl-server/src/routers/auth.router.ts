import express from "express";
import authController from "../controllers/auth.controller.js";
import { ENDPOINT } from "./authenEndpoint.js";
import findEmail from "../middlewares/findEmail.middleware.js";
import validateInputRegister from "../middlewares/validateRegister.js";

const authRouter = express.Router();

authRouter.post(
  ENDPOINT.REGISTER,
  validateInputRegister,
  findEmail,
  authController.register
);

export default authRouter;
