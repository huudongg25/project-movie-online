import { NextFunction, Request, Response } from "express";
import HistoryMovieService from "../services/historyMovie.service";

const historyMovieServices = new HistoryMovieService();
class HistoryMovieController {
  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const { status, ...result } = await historyMovieServices.create({
        ...req.body,
      });
      res.status(status as number).json(result);
    } catch (error) {
      next(error);
    }
  }

  async findAllByUsers(req: Request, res: Response, next: NextFunction) {
    try {
      const userId = Number(req.params.userId);
      const { status, ...result } = await historyMovieServices.findAllByUsers(
        userId
      );
      res.status(status as number).json(result);
    } catch (error) {
      next(error);
    }
  }
}
export default HistoryMovieController;
