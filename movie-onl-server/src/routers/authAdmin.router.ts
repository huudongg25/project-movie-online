import express from "express";
import { ENDPOINT } from "../common/endpoint";
import AuthAdminController from "../controllers/auth.admin.controller";
import authLogin from "../middlewares/auth.middleware";
import authorAdminLogin from "../middlewares/authorAdmin.middleware";

const authAdminRouter = express.Router();

const authAdminController = new AuthAdminController();

authAdminRouter.post(ENDPOINT.ADMIN_LOGIN, authAdminController.login);

authAdminRouter.post(ENDPOINT.ADMIN_CREATE, authAdminController.create);

authAdminRouter.post(
  ENDPOINT.ADMIN_LOGOUT,
  authLogin,
  authorAdminLogin,
  authAdminController.logout
);

export default authAdminRouter;
