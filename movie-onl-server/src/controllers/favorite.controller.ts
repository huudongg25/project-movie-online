import { NextFunction, Request, Response } from "express";
import FavoriteServices from "../services/favorite.service";

const favoriteServices = new FavoriteServices();

class FavoriteController {
  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const { status, ...result } = await favoriteServices.create({
        ...req.body,
      });
      res.status(status as number).json(result);
    } catch (error) {
      next(error);
    }
  }

  async findAllByMovie(req: Request, res: Response, next: NextFunction) {
    try {
      const movieId = Number(req.params.movieId);
      const { status, ...result } = await favoriteServices.findAllByMovie(
        movieId
      );
      res.status(status as number).json(result);
    } catch (error) {
      next(error);
    }
  }
}
export default FavoriteController;
