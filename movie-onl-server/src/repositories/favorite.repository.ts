import { MSG_ERROR } from "../common/msg.error";
import FavoriteMovie from "../entities/favoriteMovie.entity";
import { DatabaseConnectionError } from "../exception/index.exception";
import { FavoriteType } from "../types/favorite.type";

class FavoriteRepository {
  async findOneUserMovie(userId: number, movieId: number) {
    try {
      return await FavoriteMovie.findOne({ where: { userId, movieId } });
    } catch (error) {
      throw new DatabaseConnectionError(MSG_ERROR.DATA_UNCONNECTION_EXCEPTION);
    }
  }

  async create(newData: FavoriteType) {
    try {
      return await FavoriteMovie.create({ ...newData });
    } catch (error) {
      throw new DatabaseConnectionError(MSG_ERROR.DATA_UNCONNECTION_EXCEPTION);
    }
  }

  async remove(userId: number, movieId: number) {
    try {
      return await FavoriteMovie.destroy({ where: { userId, movieId } });
    } catch (error) {
      throw new DatabaseConnectionError(MSG_ERROR.DATA_UNCONNECTION_EXCEPTION);
    }
  }

  async findAllByMovie(movieId: number) {
    try {
      return await FavoriteMovie.findAll({ where: { movieId } });
    } catch (error) {
      throw new DatabaseConnectionError(MSG_ERROR.DATA_UNCONNECTION_EXCEPTION);
    }
  }
}
export default FavoriteRepository;
