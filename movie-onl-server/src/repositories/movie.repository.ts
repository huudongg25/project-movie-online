import { Op, QueryTypes, Transaction } from "sequelize";
import Movie from "../entities/movie.entity";
import { DatabaseConnectionError } from "../exception/index.exception";
import { MSG_ERROR } from "../common/msg.error";
import { MovieType } from "../types/movie.type";
import sequelize from "../configs/db.config";

class MovieRepository {
  async findAll(
    sort: string,
    limit: number,
    offset: number,
    search: string,
    userId: number
  ) {
    try {
      const moviesWithStatus = await sequelize.query(
        `SELECT m.*, 
                    CASE 
                        WHEN p.movieId IS NOT NULL THEN true
                        ELSE false
                    END AS isPurchased
                 FROM movies m
                 LEFT JOIN paids p ON m.id = p.movieId AND p.userId = :userId
                 WHERE m.name LIKE :search
                 ORDER BY m.id ${sort ? "ASC" : "DESC"}
                 LIMIT :limit
                 OFFSET :offset`,
        {
          replacements: {
            search: `${search.toLocaleLowerCase()}%`,
            userId: userId,
            limit: limit,
            offset: offset,
          },
          type: QueryTypes.SELECT,
        }
      );
      return moviesWithStatus;
    } catch (error) {
      throw error;
    }
  }

  async findAllMovieHot(limit: number, userId: number) {
    try {
      const moviesWithStatus = await sequelize.query(
        `SELECT m.*, 
            CASE 
                WHEN p.movieId IS NOT NULL THEN true
                ELSE false
            END AS isPurchased
            FROM movies m
            LEFT JOIN paids p ON m.id = p.movieId AND p.userId = :userId
            ORDER BY m.totalViews DESC
            LIMIT :limit`,
        {
          replacements: { userId: userId, limit: limit },
          type: QueryTypes.SELECT,
        }
      );
      return moviesWithStatus;
    } catch (error) {
      throw new DatabaseConnectionError(MSG_ERROR.DATA_UNCONNECTION_EXCEPTION);
    }
  }

  async findAllMovieNew(limit: number, userId: number) {
    try {
      const moviesWithStatus = await sequelize.query(
        `SELECT m.*, 
            CASE 
                WHEN p.movieId IS NOT NULL THEN true
                ELSE false
            END AS isPurchased
            FROM movies m
            LEFT JOIN paids p ON m.id = p.movieId  AND p.userId = :userId
            ORDER BY m.createdAt DESC
            LIMIT :limit`,
        {
          replacements: {
            userId: userId,
            limit: limit,
          },
          type: QueryTypes.SELECT,
        }
      );
      return moviesWithStatus;
    } catch (error) {
      throw new DatabaseConnectionError(MSG_ERROR.DATA_UNCONNECTION_EXCEPTION);
    }
  }

  async findOneById(id: number) {
    try {
      return await Movie.findOne({ where: { id } });
    } catch (error) {
      throw new DatabaseConnectionError(MSG_ERROR.DATA_UNCONNECTION_EXCEPTION);
    }
  }

  async create(newData: MovieType) {
    try {
      return await Movie.create({ ...newData });
    } catch (error) {
      throw new DatabaseConnectionError(MSG_ERROR.DATA_UNCONNECTION_EXCEPTION);
    }
  }

  async update(id: number, newData: MovieType, transaction?: Transaction) {
    try {
      return await Movie.update(newData, { where: { id }, transaction });
    } catch (error) {
      console.log(error);

      throw new DatabaseConnectionError(MSG_ERROR.DATA_UNCONNECTION_EXCEPTION);
    }
  }

  async remove(id: number) {
    try {
      return await Movie.destroy({ where: { id } });
    } catch (error) {
      throw new DatabaseConnectionError(MSG_ERROR.DATA_UNCONNECTION_EXCEPTION);
    }
  }
}
export default MovieRepository;
