import { MSG_ERROR } from "../common/msg.error";
import Review from "../entities/review.entity";
import { DatabaseConnectionError } from "../exception/index.exception";
import { ReviewType } from "../types/review.type";

class ReviewRepository {
  async findAllByMovie(movieId: number) {
    try {
      return await Review.findAll({ where: { movieId } });
    } catch (error) {
      throw new DatabaseConnectionError(MSG_ERROR.DATA_UNCONNECTION_EXCEPTION);
    }
  }

  async create(newData: ReviewType) {
    try {
      return await Review.create({ ...newData });
    } catch (error) {
      throw new DatabaseConnectionError(MSG_ERROR.DATA_UNCONNECTION_EXCEPTION);
    }
  }

  async findOneByUserMovie(userId: number, movieId: number) {
    try {
      return await Review.findOne({ where: { userId, movieId } });
    } catch (error) {
      console.log(error);

      throw new DatabaseConnectionError(MSG_ERROR.DATA_UNCONNECTION_EXCEPTION);
    }
  }

  async update(newData: ReviewType, userId: number, movieId: number) {
    try {
      return await Review.update(newData, { where: { userId, movieId } });
    } catch (error) {
      throw new DatabaseConnectionError(MSG_ERROR.DATA_UNCONNECTION_EXCEPTION);
    }
  }
}
export default ReviewRepository;
