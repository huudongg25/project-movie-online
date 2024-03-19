import express from "express";
import { ENDPOINT } from "./authenEndpoint";
import MovieController from "../controllers/movie.controller";

const movieRouter = express.Router();

const movieController = new MovieController();

movieRouter.get(ENDPOINT.MOVIES, movieController.findAll);

movieRouter.get(ENDPOINT.MOVIES_DETAILS, movieController.findOneMovie);
movieRouter.post(ENDPOINT.CREATE_MOVIES, movieController.createMovie);
movieRouter.get(ENDPOINT.MOVIES_HOT, movieController.findAllMovieHot);
movieRouter.get(ENDPOINT.MOVIES_NEW, movieController.findAllMovieNew);
movieRouter.patch(ENDPOINT.UPDATE_MOVIES, movieController.updateMovie);
movieRouter.delete(ENDPOINT.REMOVE_MOVIES, movieController.removeMovie);
movieRouter.post(ENDPOINT.MOVIES_BUY, movieController.buyMovie);

export default movieRouter;
