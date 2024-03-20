import express from "express";
import { ENDPOINT } from "./authenEndpoint";
import ReviewController from "../controllers/review.controller";

const reviewRouter = express.Router();

const reviewController = new ReviewController();

reviewRouter.get(ENDPOINT.REVIEW, reviewController.findAllByMovie);

reviewRouter.post(ENDPOINT.REVIEW_CREATE_REVIEW, reviewController.create);

reviewRouter.post(
  ENDPOINT.REVIEW_CREATE_COMMENT,
  reviewController.createContent
);

reviewRouter.get(
  ENDPOINT.REVIEW_DETAIL,
  reviewController.findOneByUserMovieToReview
);

reviewRouter.patch(
  ENDPOINT.REVIEW_UPDATE_RATTING_POINT,
  reviewController.updateReview
);

export default reviewRouter;
