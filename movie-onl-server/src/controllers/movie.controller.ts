import { NextFunction, Request, Response } from "express";
import MovieService from "../services/movie.service";

const movieServices = new MovieService();
class MovieController {
  async findAll(req: Request, res: Response, next: NextFunction) {
    try {
      const sort = req.query.sort || "ASC";
      const limit = Number(req.query.limit) || 10;
      const page = req.query.page || 1;
      const search = req.query.search || "";
      const userId = Number(req.query.userId) || null;
      const { status, ...result } = await movieServices.findAll(
        sort as string,
        limit as number,
        page as number,
        search as string,
        userId as number
      );
      res.status(status as number).json(result);
    } catch (error) {
      next(error);
    }
  }

  async findAllMovieHot(req: Request, res: Response, next: NextFunction) {
    try {
      const limit = Number(req.query.limit) || 10;
      const userId = Number(req.query.userId) || null;
      const { status, ...result } = await movieServices.findAllMovieHot(
        limit as number,
        userId as number
      );
      res.status(status as number).json(result);
    } catch (error) {
      next(error);
    }
  }

  async findAllMovieNew(req: Request, res: Response, next: NextFunction) {
    try {
      const limit = Number(req.query.limit) || 10;
      const userId = Number(req.query.userId) || null;
      const { status, ...result } = await movieServices.findAllMovieNew(
        limit as number,
        userId as number
      );
      res.status(status as number).json(result);
    } catch (error) {
      next(error);
    }
  }

  async findOneMovie(req: Request, res: Response, next: NextFunction) {
    try {
      const id = Number(req.params.id);
      const { status, ...result } = await movieServices.findOneById(id);
      res.status(status as number).json(result);
    } catch (error) {
      next(error);
    }
  }

  async createMovie(req: Request, res: Response, next: NextFunction) {
    try {
      const { status, ...result } = await movieServices.create({ ...req.body });
      res.status(status as number).json(result);
    } catch (error) {
      next(error);
    }
  }

  async updateMovie(req: Request, res: Response, next: NextFunction) {
    try {
      const id = Number(req.params.id);
      const { status, ...result } = await movieServices.update(id, {
        ...req.body,
      });
      res.status(status as number).json(result);
    } catch (error) {
      next(error);
    }
  }

  async removeMovie(req: Request, res: Response, next: NextFunction) {
    try {
      const id = Number(req.params.id);
      const { status, ...result } = await movieServices.remove(id);
      res.status(status as number).json(result);
    } catch (error) {
      next(error);
    }
  }

  async buyMovie(req: Request, res: Response, next: NextFunction) {
    try {
      const id = Number(req.params.id);
      const { status, ...result } = await movieServices.buyMovie(id, {
        ...req.body,
      });
      res.status(status as number).json(result);
    } catch (error) {
      next(error);
    }
  }
}
export default MovieController;
