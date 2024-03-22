import { HttpStatus, MSG_ERROR, MSG_SUCCESS } from "../common/msg.error";
import { BadRequestException } from "../exception/index.exception";
import CategoryRepository from "../repositories/category.repository";
import { CategoryType, ResponseCategory } from "../types/category.type";

class CategoryService {
  private categoryRepository: CategoryRepository;
  constructor() {
    this.categoryRepository = new CategoryRepository();
  }

  async create(newDataCategory: CategoryType): Promise<ResponseCategory> {
    try {
      const newData = {
        name: newDataCategory.name,
        describe: newDataCategory.describe,
      };
      const result = await this.categoryRepository.create(newData);
      if (result?.dataValues) {
        return {
          status: HttpStatus.OK,
          success: true,
          message: MSG_SUCCESS.CREATED("CATEGORY"),
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

  async findAll(
    sort: string,
    limit: number,
    page: number,
    search: string
  ): Promise<ResponseCategory> {
    try {
      let offset = Math.ceil((page - 1) * limit);
      const result = await this.categoryRepository.findAll(
        sort,
        limit,
        offset,
        search
      );
      if (result.length > 0) {
        return {
          status: HttpStatus.OK,
          message: MSG_SUCCESS.GET("CATEGORY"),
          data: result,
        };
      }
      return {
        status: HttpStatus.OK,
        message: MSG_ERROR.BAD_REQUEST_EXCEPTION,
        data: "No content",
      };
    } catch (error) {
      throw error;
    }
  }

  async update(id: number, newData: CategoryType): Promise<ResponseCategory> {
    try {
      const result = (await this.categoryRepository.update(
        id,
        newData
      )) as number[];
      if (result[0] !== 0) {
        return {
          status: HttpStatus.OK,
          success: true,
          message: MSG_SUCCESS.UPDATE("UPDATE CATEGORY"),
        };
      } else {
        return {
          status: HttpStatus.NOT_FOUND,
          success: false,
          message: MSG_SUCCESS.UPDATE("UPDATE CATEGORY"),
        };
      }
    } catch (error) {
      throw error;
    }
  }

  async delete(id: number): Promise<ResponseCategory> {
    try {
      const result = await this.categoryRepository.delete(id);
      if (result !== 0) {
        return {
          status: HttpStatus.OK,
          success: true,
          message: MSG_SUCCESS.DELETE("DELETE CATEGORY"),
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
}
export default CategoryService;
