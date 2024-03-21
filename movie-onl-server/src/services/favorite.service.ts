import { HttpStatus, MSG_ERROR, MSG_SUCCESS } from "../common/msg.error";
import FavoriteRepository from "../repositories/favorite.repository";
import { FavoriteResponse, FavoriteType } from "../types/favorite.type";

class FavoriteServices {
  private favoriteRepository: FavoriteRepository;
  constructor() {
    this.favoriteRepository = new FavoriteRepository();
  }

  async create(newData: FavoriteType): Promise<FavoriteResponse> {
    try {
      const findOneUserMovie = await this.favoriteRepository.findOneUserMovie(
        newData.userId as number,
        newData.movieId as number
      );
      if (findOneUserMovie?.dataValues) {
        const removeResult = await this.favoriteRepository.remove(
          newData.userId as number,
          newData.movieId as number
        );
        if (removeResult !== 0) {
          return {
            status: HttpStatus.OK,
            success: true,
            message: MSG_SUCCESS.DELETE("FAVORITE"),
          };
        }
        return {
          status: HttpStatus.NOT_FOUND,
          success: false,
          message: MSG_ERROR.BAD_REQUEST_EXCEPTION,
        };
      }
      const result = await this.favoriteRepository.create({
        userId: newData.userId,
        movieId: newData.movieId,
      });
      if (result?.dataValues) {
        return {
          status: HttpStatus.OK,
          success: true,
          message: MSG_SUCCESS.CREATED("FAVORITE"),
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

  async findAllByMovie(movieId: number): Promise<FavoriteResponse> {
    try {
      const result = await this.favoriteRepository.findAllByMovie(movieId);
      if (result.length < 0) {
        return {
          status: HttpStatus.OK,
          data: 0 as FavoriteType,
          success: true,
          message: MSG_SUCCESS.GET("FAVORITE"),
        };
      }
      return {
        status: HttpStatus.OK,
        data: result as FavoriteType,
        success: true,
        message: MSG_SUCCESS.GET("FAVORITE"),
      };
    } catch (error) {
      throw error;
    }
  }
}

export default FavoriteServices;
