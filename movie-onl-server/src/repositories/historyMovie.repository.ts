import { Transaction } from "sequelize";
import { MSG_ERROR } from "../common/msg.error";
import WatchHistory from "../entities/watchHistory.entity";
import { DatabaseConnectionError } from "../exception/index.exception";
import Movie from "../entities/movie.entity";

class HistoryMovieRepository {
  async create(newDataHistoryMovie: any, transaction?: Transaction) {
    try {
      return await WatchHistory.create(
        { ...newDataHistoryMovie },
        { transaction }
      );
    } catch (error) {
      throw new DatabaseConnectionError(MSG_ERROR.DATA_UNCONNECTION_EXCEPTION);
    }
  }

  async findAllByUser(userId: number) {
    try {
      return await WatchHistory.findAll({ where: { userId }, include: Movie });
    } catch (error) {
      throw new DatabaseConnectionError(MSG_ERROR.DATA_UNCONNECTION_EXCEPTION);
    }
  }

  async findOneByUserMovie(userId: number, movieId: number) {
    try {
      return await WatchHistory.findOne({ where: { userId, movieId } });
    } catch (error) {
      throw new DatabaseConnectionError(MSG_ERROR.DATA_UNCONNECTION_EXCEPTION);
    }
  }
}
export default HistoryMovieRepository;
