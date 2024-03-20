import { HttpStatus, MSG_ERROR, MSG_SUCCESS } from "../common/msg.error";
import sequelize from "../configs/db.config";
import { BadRequestException } from "../exception/index.exception";
import HistoryMovieRepository from "../repositories/historyMovie.repository";
import MovieRepository from "../repositories/movie.repository";
import { HistoryMovieResponse, HistoryMovieType } from "../types/history.type";

class HistoryMovieService {
  private historyMovieRepository: HistoryMovieRepository;
  private movieRepository: MovieRepository;
  constructor() {
    this.historyMovieRepository = new HistoryMovieRepository();
    this.movieRepository = new MovieRepository();
  }

  async create(
    newDataHistoryMovie: HistoryMovieType
  ): Promise<HistoryMovieResponse> {
    const transaction = await sequelize.transaction();

    try {
      const findOneByUserMovie =
        await this.historyMovieRepository.findOneByUserMovie(
          newDataHistoryMovie.userId as number,
          newDataHistoryMovie.movieId as number
        );

      const dataByIdMovie = await this.movieRepository.findOneById(
        newDataHistoryMovie.movieId as number
      );

      if (!findOneByUserMovie?.dataValues) {
        await this.historyMovieRepository.create(
          {
            userId: newDataHistoryMovie.userId,
            movieId: newDataHistoryMovie.movieId,
          },
          transaction
        );
      }

      if (!dataByIdMovie?.dataValues) {
        throw new BadRequestException(MSG_ERROR.NOT_FOUND_EXCEPTION);
      }

      const resultMovie = await this.movieRepository.update(
        newDataHistoryMovie.movieId as number,
        {
          totalViews: Number(dataByIdMovie.dataValues.totalViews) + 1,
        },
        transaction
      );

      if (resultMovie[0] !== 0) {
        await transaction.commit();
        return {
          status: HttpStatus.OK,
          success: true,
          message: MSG_SUCCESS.UPDATE("MOVIE AND HISTORY_MOVIE"),
        };
      } else {
        return {
          status: HttpStatus.NOT_FOUND,
          success: false,
          message: MSG_ERROR.BAD_REQUEST_EXCEPTION,
        };
      }
    } catch (error) {
      await transaction.rollback();
      throw error;
    }
  }

  async findAllByUsers(userId: number): Promise<HistoryMovieResponse> {
    try {
      const result = await this.historyMovieRepository.findAllByUser(userId);
      if (result.length > 0) {
        return {
          status: HttpStatus.OK,
          data: result as HistoryMovieType,
          message: MSG_SUCCESS.GET("HISTORY_MOVIE"),
        };
      }
      return {
        status: HttpStatus.NOT_FOUND,
        data: result as HistoryMovieType,
        message: MSG_ERROR.BAD_REQUEST_EXCEPTION,
      };
    } catch (error) {
      throw error;
    }
  }
}
export default HistoryMovieService;
