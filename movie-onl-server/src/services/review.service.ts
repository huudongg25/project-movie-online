import { HttpStatus, MSG_ERROR, MSG_SUCCESS } from "../common/msg.error";
import HistoryMovieRepository from "../repositories/historyMovie.repository";
import ReviewRepository from "../repositories/review.repository";
import { ReviewResponse, ReviewType } from "../types/review.type";

class ReviewService {
  private reviewRepository: ReviewRepository;
  private historyMovieRepository: HistoryMovieRepository;
  constructor() {
    this.reviewRepository = new ReviewRepository();
    this.historyMovieRepository = new HistoryMovieRepository();
  }

  async findAllByMovie(movieId: number): Promise<ReviewResponse> {
    try {
      const result = await this.reviewRepository.findAllByMovie(movieId);
      if (result.length > 0) {
        return {
          status: HttpStatus.OK,
          data: result as ReviewType,
          message: MSG_SUCCESS.GET("REVIEW"),
        };
      }
      return {
        status: HttpStatus.OK,
        data: result as ReviewType,
        message: MSG_ERROR.BAD_GET,
      };
    } catch (error) {
      throw error;
    }
  }

  async create(newData: ReviewType): Promise<ReviewResponse> {
    try {
      const result = await this.reviewRepository.create({
        userId: newData.userId,
        movieId: newData.movieId,
        rattingPoint: newData.rattingPoint,
      });
      if (result?.dataValues) {
        return {
          status: HttpStatus.OK,
          success: true,
          message: MSG_SUCCESS.CREATED("REVIEW"),
        };
      }
      return {
        status: HttpStatus.NOT_FOUND,
        success: false,
        message: MSG_ERROR.BAD_REQUEST_EXCEPTION,
      };
    } catch (error) {
      throw error;
    }
  }

  async findOneByUserMovieToReview(
    newData: ReviewType
  ): Promise<ReviewResponse> {
    try {
      const resultHistoryMovie =
        await this.historyMovieRepository.findOneByUserMovie(
          newData.userId as number,
          newData.movieId as number
        );

      const resultReview = await this.reviewRepository.findOneByUserMovie(
        newData.userId as number,
        newData.movieId as number
      );

      if (!resultHistoryMovie?.dataValues) {
        return {
          status: HttpStatus.BAD_REQUEST,
          success: false,
          message: MSG_ERROR.NOT_FOUND_EXCEPTION,
        };
      }

      if (resultReview?.dataValues) {
        return {
          status: HttpStatus.BAD_REQUEST,
          success: false,
          message: MSG_ERROR.NOT_FOUND_EXCEPTION,
        };
      }

      return {
        status: HttpStatus.OK,
        success: true,
        message: MSG_SUCCESS.GET("LET'S REVIEW"),
      };
    } catch (error) {
      throw error;
    }
  }

  async createContent(newData: ReviewType): Promise<ReviewResponse> {
    try {
      const resultReview = await this.reviewRepository.findOneByUserMovie(
        newData.userId as number,
        newData.movieId as number
      );

      if (!resultReview?.dataValues) {
        throw {
          status: HttpStatus.NOT_FOUND,
          success: false,
          message: MSG_ERROR.NOT_FOUND_EXCEPTION,
        };
      }

      const result = await this.reviewRepository.update(
        { content: newData.content },
        newData.userId as number,
        newData.movieId as number
      );

      if (result[0] !== 0) {
        return {
          status: HttpStatus.OK,
          success: true,
          message: MSG_SUCCESS.CREATED("COMMENT"),
        };
      }

      throw {
        status: HttpStatus.OK,
        success: false,
        message: MSG_ERROR.BAD_REQUEST_EXCEPTION,
      };
    } catch (error) {
      throw error;
    }
  }

  async update(newData: ReviewType): Promise<ReviewResponse> {
    try {
      const { userId, movieId, ...newDataReview } = newData;

      const resultReview = await this.reviewRepository.findOneByUserMovie(
        userId as number,
        movieId as number
      );

      if (!resultReview?.dataValues) {
        throw {
          status: HttpStatus.NOT_FOUND,
          success: false,
          message: MSG_ERROR.NOT_FOUND_EXCEPTION,
        };
      }

      const result = await this.reviewRepository.update(
        newDataReview,
        userId as number,
        movieId as number
      );

      if (result[0] !== 0) {
        return {
          status: HttpStatus.OK,
          success: true,
          message: MSG_SUCCESS.UPDATE("RATTING"),
        };
      }

      throw {
        status: HttpStatus.OK,
        success: false,
        message: MSG_ERROR.BAD_REQUEST_EXCEPTION,
      };
    } catch (error) {
      throw error;
    }
  }
}

export default ReviewService;
