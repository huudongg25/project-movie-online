import { Express } from "express";
import { BASE_PATH } from "./authenEndpoint";
import authRouter from "./auth.router";

const Router = (server: Express) => {
  server.use(BASE_PATH, authRouter);
};

export default Router;
