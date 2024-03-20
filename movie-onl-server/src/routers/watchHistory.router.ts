import express from "express";
import CategoryController from "../controllers/category.controller";
import { ENDPOINT } from "./authenEndpoint";
import HistoryMovieController from "../controllers/historyMovie.controller";

const watchHistoryRouter = express.Router();

const watchHistoryController = new HistoryMovieController();

watchHistoryRouter.get(
  ENDPOINT.WATCH_HISTORY,
  watchHistoryController.findAllByUsers
);

watchHistoryRouter.post(
  ENDPOINT.WATCH_HISTORY_CREATE,
  watchHistoryController.create
);

export default watchHistoryRouter;
