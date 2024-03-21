import express from "express";
import CategoryController from "../controllers/category.controller";
import { ENDPOINT } from "../common/endpoint";
import HistoryMovieController from "../controllers/historyMovie.controller";
import authLogin from "../middlewares/auth.middleware";
import authorLogin from "../middlewares/author.middleware";

const watchHistoryRouter = express.Router();

const watchHistoryController = new HistoryMovieController();

watchHistoryRouter.get(
  ENDPOINT.WATCH_HISTORY,
  authLogin,
  authorLogin,
  watchHistoryController.findAllByUsers
);

watchHistoryRouter.post(
  ENDPOINT.WATCH_HISTORY_CREATE,
  authLogin,
  authorLogin,
  watchHistoryController.create
);

export default watchHistoryRouter;
