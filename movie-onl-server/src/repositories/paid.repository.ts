import { MSG_ERROR } from "../common/msg.error";
import Paid from "../entities/paid.entity";
import { DatabaseConnectionError } from "../exception/index.exception";

class PaidRepository {
  // async create(newData: any) {
  //   try {
  //     return await Paid.create(newData);
  //   } catch (error) {
  //     throw new DatabaseConnectionError(MSG_ERROR.DATA_UNCONNECTION_EXCEPTION);
  //   }
  // }
}
export default PaidRepository;
