import { NextFunction, Request, Response } from "express";
import ReviewService from "../services/review.service";

const reviewServices = new ReviewService();

class ReviewController {
  async findAllByMovie(req: Request, res: Response, next: NextFunction) {
    try {
      const movieId = Number(req.params.movieId);
      const { status, ...result } = await reviewServices.findAllByMovie(
        movieId
      );
      res.status(status as number).json(result);
    } catch (error) {
      next(error);
    }
  }

  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const { status, ...result } = await reviewServices.create({
        ...req.body,
      });
      res.status(status as number).json(result);
    } catch (error) {
      next(error);
    }
  }

  async findOneByUserMovieToReview(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const userId = Number(req.params.userId);
      const movieId = Number(req.params.movieId);
      const { status, ...result } =
        await reviewServices.findOneByUserMovieToReview({
          userId,
          movieId,
        });
      res.status(status as number).json(result);
    } catch (error) {
      console.log(error);

      next(error);
    }
  }

  async createContent(req: Request, res: Response, next: NextFunction) {
    try {
      const { status, ...result } = await reviewServices.createContent({
        ...req.body,
      });
      res.status(status as number).json(result);
    } catch (error) {
      next(error);
    }
  }

  async updateReview(req: Request, res: Response, next: NextFunction) {
    try {
      const { status, ...result } = await reviewServices.update({
        ...req.body,
      });
      res.status(status as number).json(result);
    } catch (error) {
      next(error);
    }
  }
}
export default ReviewController;
