import { HttpStatus, MSG_ERROR, MSG_SUCCESS } from "../common/msg.error";
import sequelize from "../configs/db.config";
import { BadRequestException } from "../exception/index.exception";
import MovieRepository from "../repositories/movie.repository";
import PaidRepository from "../repositories/paid.repository";
import UserRepository from "../repositories/user.repository";
import { MovieResponse, MovieType } from "../types/movie.type";

class MovieService {
  private movieRepository: MovieRepository;
  private userRepository: UserRepository;
  private paidRepository: PaidRepository;
  constructor() {
    this.movieRepository = new MovieRepository();
    this.userRepository = new UserRepository();
    this.paidRepository = new PaidRepository();
  }
  async findAll(
    sort: string,
    limit: number,
    page: number,
    search: string,
    userId: number
  ): Promise<MovieResponse> {
    try {
      let offset = Math.ceil((page - 1) * limit);

      const result = await this.movieRepository.findAll(
        sort,
        limit,
        offset,
        search,
        userId
      );
      if (result.length > 0) {
        return {
          status: HttpStatus.OK,
          data: result as MovieType,
          message: MSG_SUCCESS.GET("MOVIE"),
        };
      }
      return {
        status: HttpStatus.NOT_FOUND,
        data: result as MovieType,
        message: MSG_ERROR.BAD_REQUEST_EXCEPTION,
      };
    } catch (error) {
      throw error;
    }
  }

  async findAllMovieHot(limit: number, userId: number): Promise<MovieResponse> {
    try {
      const result = await this.movieRepository.findAllMovieHot(limit, userId);
      if (result.length > 0) {
        return {
          status: HttpStatus.OK,
          data: result as MovieType,
          message: MSG_SUCCESS.GET("MOVIE HOT"),
        };
      }
      return {
        status: HttpStatus.OK,
        data: result as MovieType,
        message: MSG_ERROR.BAD_GET,
      };
    } catch (error) {
      throw error;
    }
  }

  async findAllMovieNew(limit: number, userId: number): Promise<MovieResponse> {
    try {
      const result = await this.movieRepository.findAllMovieNew(limit, userId);
      if (result.length > 0) {
        return {
          status: HttpStatus.OK,
          data: result as MovieType,
          message: MSG_SUCCESS.GET("MOVIE NEW"),
        };
      }
      return {
        status: HttpStatus.OK,
        data: result as MovieType,
        message: MSG_ERROR.BAD_GET,
      };
    } catch (error) {
      throw error;
    }
  }

  async findOneById(id: number): Promise<MovieResponse> {
    try {
      const result = await this.movieRepository.findOneById(id);
      if (result) {
        return {
          status: HttpStatus.OK,
          data: result as MovieType,
          message: MSG_SUCCESS.GET("MOVIE"),
        };
      }
      throw {
        status: HttpStatus.NOT_FOUND,
        message: MSG_ERROR.BAD_REQUEST_EXCEPTION,
      };
    } catch (error) {
      throw error;
    }
  }

  async create(newDataMovie: MovieType): Promise<MovieResponse> {
    try {
      const result = await this.movieRepository.create({
        name: newDataMovie.name,
        director: newDataMovie.director,
        performer: newDataMovie.performer,
        categoryId: newDataMovie.categoryId,
        manufactureYear: newDataMovie.manufactureYear,
        describe: newDataMovie.describe,
        video: newDataMovie.video,
        price: newDataMovie.price,
        datePublication: newDataMovie.datePublication,
        movieDuration: newDataMovie.movieDuration,
      });
      if (result?.dataValues) {
        return {
          status: HttpStatus.OK,
          success: true,
          message: MSG_SUCCESS.CREATED("MOVIE"),
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

  async update(id: number, newData: MovieType): Promise<MovieResponse> {
    try {
      const result = (await this.movieRepository.update(
        id,
        newData
      )) as number[];
      if (result[0] !== 0) {
        return {
          status: HttpStatus.OK,
          success: true,
          message: MSG_SUCCESS.UPDATE("UPDATE MOVIE"),
        };
      } else {
        return {
          status: HttpStatus.NOT_FOUND,
          success: false,
          message: MSG_SUCCESS.UPDATE("UPDATE MOVIE"),
        };
      }
    } catch (error) {
      throw error;
    }
  }

  async remove(id: number): Promise<MovieResponse> {
    try {
      const result = await this.movieRepository.remove(id);
      if (result !== 0) {
        return {
          status: HttpStatus.OK,
          success: true,
          message: MSG_SUCCESS.DELETE("DELETE MOVIE"),
        };
      } else {
        return {
          status: HttpStatus.NOT_FOUND,
          success: false,
          message: MSG_ERROR.NOT_FOUND_EXCEPTION,
        };
      }
    } catch (error) {
      throw error;
    }
  }

  async buyMovie(id: number, newData: MovieType): Promise<MovieResponse> {
    const transaction = await sequelize.transaction();

    try {
      const dataByIdMovie = await this.movieRepository.findOneById(id);
      const dataByIdUser = await this.userRepository.findOneById(
        newData.userId as number
      );

      if (!dataByIdMovie?.dataValues && !dataByIdUser?.dataValues) {
        throw {
          status: HttpStatus.NOT_FOUND,
          message: MSG_ERROR.BAD_REQUEST_EXCEPTION,
        };
      }

      const newDepositedAmount =
        Number(dataByIdUser?.dataValues.depositedAmount) -
        Number(dataByIdMovie?.dataValues.price);

      if (newDepositedAmount < 0) {
        throw {
          status: HttpStatus.BAD_REQUEST,
          message: MSG_ERROR.PAYMENT_REQUEIR_EXCEPTION,
        };
      }

      const result = await this.userRepository.update(
        id,
        {
          depositedAmount: newDepositedAmount,
        },
        transaction
      );

      const paidHistories = await this.paidRepository.create(
        {
          userId: newData.userId,
          movieId: id,
          price: dataByIdMovie?.dataValues.price,
          billingInformation:
            newData.billingInformation ||
            dataByIdUser?.dataValues.email + " đã thanh toán",
        },
        transaction
      );

      if (result[0] !== 0 && paidHistories.dataValues) {
        await transaction.commit();

        return {
          status: HttpStatus.OK,
          success: true,
          message: MSG_SUCCESS.UPDATE("USER AND PAID"),
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
}
export default MovieService;
