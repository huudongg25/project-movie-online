// Router.js

import { Express } from "express";
import { BASE_PATH } from "./authenEndpoint";
import authController from "../controllers/auth.controller";

const Router = (server: Express) => {
  server.use(BASE_PATH, authController);
};

export default Router;
