import { MSG_ERROR } from "../common/msg.error";
import Admin from "../entities/admin.entity";
import { DatabaseConnectionError } from "../exception/index.exception";

class AdminRepository {
  async create(newData: any) {
    try {
      return await Admin.create({ ...newData });
    } catch (error) {
      throw new DatabaseConnectionError(MSG_ERROR.DATA_UNCONNECTION_EXCEPTION);
    }
  }

  async findOneByEmail(email: string) {
    try {
      return await Admin.findOne({ where: { email } });
    } catch (error) {
      throw new DatabaseConnectionError(MSG_ERROR.DATA_UNCONNECTION_EXCEPTION);
    }
  }
}
export default AdminRepository;
