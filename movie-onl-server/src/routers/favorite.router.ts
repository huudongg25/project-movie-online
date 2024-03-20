import express from "express";
import { ENDPOINT } from "./authenEndpoint";
import FavoriteController from "../controllers/favorite.controller";

const favoriteRouter = express.Router();

const favoriteController = new FavoriteController();

favoriteRouter.get(ENDPOINT.FAVORITE, favoriteController.findAllByMovie);

favoriteRouter.post(ENDPOINT.FAVORITE_CREATE, favoriteController.create);

export default favoriteRouter;
