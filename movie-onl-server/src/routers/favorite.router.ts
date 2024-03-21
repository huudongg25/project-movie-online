import express from "express";
import { ENDPOINT } from "../common/endpoint";
import FavoriteController from "../controllers/favorite.controller";
import authorLogin from "../middlewares/author.middleware";
import authLogin from "../middlewares/auth.middleware";

const favoriteRouter = express.Router();

const favoriteController = new FavoriteController();

favoriteRouter.get(ENDPOINT.FAVORITE, favoriteController.findAllByMovie);

favoriteRouter.post(
  ENDPOINT.FAVORITE_CREATE,
  authLogin,
  authorLogin,
  favoriteController.create
);

export default favoriteRouter;
