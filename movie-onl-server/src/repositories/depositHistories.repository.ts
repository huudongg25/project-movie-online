import { Transaction } from "sequelize";
import { MSG_ERROR } from "../common/msg.error";
import DepositHistory from "../entities/depositHistory.entity";
import { DatabaseConnectionError } from "../exception/index.exception";
import { DepositHistoryType } from "../types/depositHistory.type";

class DepositHistoriesRepository {
  async create(newData: DepositHistoryType, transaction?: Transaction) {
    try {
      if (transaction) {
        return await DepositHistory.create({ ...newData }, { transaction });
      }
      return await DepositHistory.create({ ...newData });
    } catch (error) {
      throw new DatabaseConnectionError(MSG_ERROR.DATA_UNCONNECTION_EXCEPTION);
    }
  }
}
export default DepositHistoriesRepository;
