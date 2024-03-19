import { Express } from "express";
import { BASE_PATH } from "./authenEndpoint";
import authRouter from "./auth.router";
import userRouter from "./user.router";
import categoryRouter from "./category.router";

const Router = (server: Express) => {
  server.use(BASE_PATH, authRouter);

  server.use(BASE_PATH, userRouter);

  server.use(BASE_PATH, categoryRouter);
};

export default Router;
