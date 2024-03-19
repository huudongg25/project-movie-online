import User from "../entities/user.entity";
import { UserType } from "../types/user.type";
import { DatabaseConnectionError } from "../exception/index.exception";
import { FindOptions, Op, Transaction } from "sequelize";
import { MSG_ERROR } from "../common/msg.error";

class UserRepository {
  async findAll(sort: string, limit: number, offset: number, search: string) {
    try {
      return await User.findAll({
        order: [["id", sort]],
        limit,
        offset,
        where: {
          email: {
            [Op.like]: `${search.toLocaleLowerCase()}%`,
          },
        },
      });
    } catch (error) {
      throw new DatabaseConnectionError(MSG_ERROR.DATA_UNCONNECTION_EXCEPTION);
    }
  }

  async findOneById(id: number) {
    try {
      return await User.findOne({ where: { id } });
    } catch (error) {
      throw new DatabaseConnectionError(MSG_ERROR.DATA_UNCONNECTION_EXCEPTION);
    }
  }

  async create(newData: UserType) {
    try {
      return await User.create({ ...newData });
    } catch (error) {
      throw new DatabaseConnectionError(MSG_ERROR.DATA_UNCONNECTION_EXCEPTION);
    }
  }

  async findOneByEmail(email: string) {
    try {
      return await User.findOne({
        where: {
          email,
        },
      });
    } catch (error) {
      throw new DatabaseConnectionError(MSG_ERROR.DATA_UNCONNECTION_EXCEPTION);
    }
  }

  async resetPassword(email: string, password: string) {
    try {
      return await User.update({ password }, { where: { email } });
    } catch (error) {
      throw new DatabaseConnectionError(MSG_ERROR.DATA_UNCONNECTION_EXCEPTION);
    }
  }

  async update(id: number, newData: UserType, transaction?: Transaction) {
    try {
      if (transaction) {
        return await User.update(newData, { where: { id }, transaction });
      }
      return await User.update(newData, { where: { id } });
    } catch (error) {
      throw new DatabaseConnectionError(MSG_ERROR.DATA_UNCONNECTION_EXCEPTION);
    }
  }
}

export default UserRepository;
