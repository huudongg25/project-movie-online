import { Express } from "express";
import { BASE_PATH } from "../common/endpoint";
import authRouter from "./auth.router";
import userRouter from "./user.router";
import categoryRouter from "./category.router";
import movieRouter from "./movie.router";
import watchHistoryRouter from "./watchHistory.router";
import reviewRouter from "./review.router";
import favoriteRouter from "./favorite.router";
import authAdminRouter from "./authAdmin.router";

const Router = (server: Express) => {
  server.use(BASE_PATH, authRouter);

  server.use(BASE_PATH, userRouter);

  server.use(BASE_PATH, categoryRouter);

  server.use(BASE_PATH, movieRouter);

  server.use(BASE_PATH, watchHistoryRouter);

  server.use(BASE_PATH, reviewRouter);

  server.use(BASE_PATH, favoriteRouter);

  server.use(BASE_PATH, authAdminRouter);
};

export default Router;
