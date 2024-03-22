import express from "express";
import { ENDPOINT } from "../common/endpoint";
import MovieController from "../controllers/movie.controller";
import authorAdminLogin from "../middlewares/authorAdmin.middleware";
import authLogin from "../middlewares/auth.middleware";
import authorLogin from "../middlewares/author.middleware";

const movieRouter = express.Router();

const movieController = new MovieController();

movieRouter.get(ENDPOINT.MOVIES, movieController.findAll);

movieRouter.get(ENDPOINT.MOVIES_DETAILS, movieController.findOneMovie);
movieRouter.post(
  ENDPOINT.CREATE_MOVIES,
  authLogin,
  authorAdminLogin,
  movieController.createMovie
);
movieRouter.get(ENDPOINT.MOVIES_HOT, movieController.findAllMovieHot);
movieRouter.get(ENDPOINT.MOVIES_NEW, movieController.findAllMovieNew);
movieRouter.patch(
  ENDPOINT.UPDATE_MOVIES,
  authLogin,
  authorAdminLogin,
  movieController.updateMovie
);
movieRouter.delete(
  ENDPOINT.REMOVE_MOVIES,
  authLogin,
  authorAdminLogin,
  movieController.removeMovie
);
movieRouter.post(
  ENDPOINT.MOVIES_BUY,
  authLogin,
  authorLogin,
  movieController.buyMovie
);

export default movieRouter;
