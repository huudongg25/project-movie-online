import express from "express";
import { ENDPOINT } from "../common/endpoint";
import findEmail from "../middlewares/findEmail.middleware";
import uploadCloud from "../configs/cloud.config";
import UserController from "../controllers/user.controller";
import authLogin from "../middlewares/auth.middleware";
import authorAdminLogin from "../middlewares/authorAdmin.middleware";
import authorLogin from "../middlewares/author.middleware";

const userRouter = express.Router();

const userController = new UserController();

userRouter.get(
  ENDPOINT.USERS,
  authLogin,
  authorAdminLogin,
  userController.findAllUser
);

userRouter.get(
  ENDPOINT.USER_DETAIL,
  authLogin,
  authorLogin,
  userController.findOneUser
);

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

userRouter.patch(
  ENDPOINT.UPDATE_STATUS,
  authLogin,
  authorAdminLogin,
  userController.changeStatus
);

userRouter.patch(
  ENDPOINT.UPDATE_PRICE,
  authLogin,
  authorLogin,
  userController.addMoney
);

export default userRouter;
