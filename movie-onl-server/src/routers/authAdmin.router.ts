import express from "express";
import { ENDPOINT } from "../common/endpoint";
import AuthAdminController from "../controllers/auth.admin.controller";

const authAdminRouter = express.Router();

const authAdminController = new AuthAdminController();

authAdminRouter.post(ENDPOINT.ADMIN_LOGIN, authAdminController.login);
authAdminRouter.post(ENDPOINT.ADMIN_CREATE, authAdminController.create);

export default authAdminRouter;
