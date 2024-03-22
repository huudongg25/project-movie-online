import {
  BadRequestException,
  DatabaseConnectionError,
  ServerException,
} from "../exception/index.exception";
import { HttpStatus, MSG_ERROR } from "../common/msg.error";
import Category from "../entities/category.entity";
import { FindOptions, Op } from "sequelize";
import { CategoryType } from "../types/category.type";

class CategoryRepository {
  async create(newData: CategoryType) {
    try {
      return await Category.create({ ...newData });
    } catch (error) {
      throw new DatabaseConnectionError(MSG_ERROR.DATA_UNCONNECTION_EXCEPTION);
    }
  }

  async findAll(sort: string, limit: number, offset: number, search: string) {
    try {
      return await Category.findAll({
        order: [["id", sort]],
        limit,
        offset,
        where: {
          name: {
            [Op.like]: `%${search}%`,
          },
        },
      });
    } catch (error) {
      throw new DatabaseConnectionError(MSG_ERROR.DATA_UNCONNECTION_EXCEPTION);
    }
  }

  async update(id: number, newData: CategoryType) {
    try {
      return await Category.update(newData, { where: { id } });
    } catch (error) {
      throw new DatabaseConnectionError(MSG_ERROR.DATA_UNCONNECTION_EXCEPTION);
    }
  }

  async delete(id: number) {
    try {
      return await Category.destroy({ where: { id } });
    } catch (error: any) {
      if (error.name == "SequelizeForeignKeyConstraintError") {
        throw new BadRequestException(MSG_ERROR.BAD_CATEGORY);
      }
      throw new DatabaseConnectionError(MSG_ERROR.DATA_UNCONNECTION_EXCEPTION);
    }
  }
}
export default CategoryRepository;
