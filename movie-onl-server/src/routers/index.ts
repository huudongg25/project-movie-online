import { Express } from "express";
import { BASE_PATH } from "./authenEndpoint";
import authRouter from "./auth.router";
import userRouter from "./user.router";
import categoryRouter from "./category.router";
import movieRouter from "./movie.router";
import watchHistoryRouter from "./watchHistory.router";

const Router = (server: Express) => {
  server.use(BASE_PATH, authRouter);

  server.use(BASE_PATH, userRouter);

  server.use(BASE_PATH, categoryRouter);

  server.use(BASE_PATH, movieRouter);

  server.use(BASE_PATH, watchHistoryRouter);
};

export default Router;
