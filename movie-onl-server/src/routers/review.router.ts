import express from "express";
import { ENDPOINT } from "../common/endpoint";
import ReviewController from "../controllers/review.controller";
import authLogin from "../middlewares/auth.middleware";
import authorLogin from "../middlewares/author.middleware";

const reviewRouter = express.Router();

const reviewController = new ReviewController();

reviewRouter.get(
  ENDPOINT.REVIEW,
  authLogin,
  authorLogin,
  reviewController.findAllByMovie
);

reviewRouter.post(
  ENDPOINT.REVIEW_CREATE_REVIEW,
  authLogin,
  authorLogin,
  reviewController.create
);

reviewRouter.post(
  ENDPOINT.REVIEW_CREATE_COMMENT,
  authLogin,
  authorLogin,
  reviewController.createContent
);

reviewRouter.get(
  ENDPOINT.REVIEW_DETAIL,
  authLogin,
  authorLogin,
  reviewController.findOneByUserMovieToReview
);

reviewRouter.patch(
  ENDPOINT.REVIEW_UPDATE_RATTING_POINT,
  authLogin,
  authorLogin,
  reviewController.updateReview
);

export default reviewRouter;
