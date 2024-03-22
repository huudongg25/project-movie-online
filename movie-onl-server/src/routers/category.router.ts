import express from "express";
import CategoryController from "../controllers/category.controller";
import { ENDPOINT } from "../common/endpoint";
import authorAdminLogin from "../middlewares/authorAdmin.middleware";
import authorLogin from "../middlewares/author.middleware";
import authLogin from "../middlewares/auth.middleware";

const categoryRouter = express.Router();

const categoryController = new CategoryController();

categoryRouter.get(
  ENDPOINT.CATEGORY,
  authLogin,
  authorLogin,
  categoryController.findAllCategory
);

categoryRouter.post(
  ENDPOINT.CREATE_CATEGORY,
  authLogin,
  authorAdminLogin,
  categoryController.createCategory
);

categoryRouter.patch(
  ENDPOINT.UPDATE_CATEGORY,
  authLogin,
  authorAdminLogin,
  categoryController.updateCategory
);

categoryRouter.delete(
  ENDPOINT.REMOVE_CATEGORY,
  authLogin,
  authorAdminLogin,
  categoryController.removeCategory
);

export default categoryRouter;
