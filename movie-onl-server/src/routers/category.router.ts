import express from "express";
import CategoryController from "../controllers/category.controller";
import { ENDPOINT } from "./authenEndpoint";

const categoryRouter = express.Router();

const categoryController = new CategoryController();

categoryRouter.get(ENDPOINT.CATEGORY, categoryController.findAllCategory);

categoryRouter.post(
  ENDPOINT.CREATE_CATEGORY,
  categoryController.createCategory
);

categoryRouter.patch(
  ENDPOINT.UPDATE_CATEGORY,
  categoryController.updateCategory
);

categoryRouter.delete(
  ENDPOINT.REMOVE_CATEGORY,
  categoryController.removeCategory
);

export default categoryRouter;
