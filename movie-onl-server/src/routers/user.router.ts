import express from "express";
import { ENDPOINT } from "./authenEndpoint";
import findEmail from "../middlewares/findEmail.middleware";
import uploadCloud from "../configs/cloud.config";
import UserController from "../controllers/user.controller";

const userRouter = express.Router();

const userController = new UserController();

userRouter.get(ENDPOINT.USERS, userController.findAllUser);

userRouter.get(ENDPOINT.USER_DETAIL, userController.findOneUser);

userRouter.post(
  ENDPOINT.FORGOT_PASSWORD,
  findEmail,
  userController.forgotPassword
);

userRouter.post(ENDPOINT.CHECK_PIN, userController.checkPin);

userRouter.post(ENDPOINT.RESETPASSWORD, userController.resetPassword);

userRouter.patch(
  ENDPOINT.UPLOAD_AVATAR,
  uploadCloud.single("file"),
  userController.uploadAvatar
);

userRouter.patch(ENDPOINT.UPDATE_PROFILE, userController.updateProfile);

userRouter.patch(ENDPOINT.UPDATE_STATUS, userController.changeStatus);

userRouter.patch(ENDPOINT.UPDATE_PRICE, userController.addMoney);

export default userRouter;
