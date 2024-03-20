import { Transaction } from "sequelize";
import { MSG_ERROR } from "../common/msg.error";
import Paid from "../entities/paid.entity";
import { DatabaseConnectionError } from "../exception/index.exception";
import { PaidType } from "../types/paid.type";

class PaidRepository {
  async create(newData: PaidType, transaction?: Transaction) {
    try {
      return await Paid.create({ ...newData }, { transaction });
    } catch (error) {
      throw new DatabaseConnectionError(MSG_ERROR.DATA_UNCONNECTION_EXCEPTION);
    }
  }

  async findOneByUser(userId: number) {
    try {
      return await Paid.findOne({ where: { userId } });
    } catch (error) {
      throw new DatabaseConnectionError(MSG_ERROR.DATA_UNCONNECTION_EXCEPTION);
    }
  }
}
export default PaidRepository;
