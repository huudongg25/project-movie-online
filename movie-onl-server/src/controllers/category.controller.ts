import { NextFunction, Request, Response } from "express";
import CategoryService from "../services/category.service";

const categoryServices = new CategoryService();

class CategoryController {
  async createCategory(req: Request, res: Response, next: NextFunction) {
    try {
      const { status, ...result } = await categoryServices.create({
        ...req.body,
      });
      res.status(status as number).json(result);
    } catch (error) {
      next(error);
    }
  }

  async findAllCategory(req: Request, res: Response, next: NextFunction) {
    try {
      const sort = req.query.sort || "ASC";
      const limit = req.query.limit || 7;
      const page = req.query.page || 1;
      const search = req.query.search || "";
      const { status, ...result } = await categoryServices.findAll(
        sort as string,
        limit as number,
        page as number,
        search as string
      );
      res.status(status as number).json(result);
    } catch (error) {
      next(error);
    }
  }

  async updateCategory(req: Request, res: Response, next: NextFunction) {
    try {
      const id = Number(req.params.id);
      const { status, ...result } = await categoryServices.update(id, {
        ...req.body,
      });
      res.status(status as number).json(result);
    } catch (error) {
      console.log(error);

      next(error);
    }
  }

  async removeCategory(req: Request, res: Response, next: NextFunction) {
    try {
      const id = Number(req.params.id);
      const { status, ...result } = await categoryServices.delete(id);
      res.status(status as number).json(result);
    } catch (error) {
      next(error);
    }
  }
}

export default CategoryController;
