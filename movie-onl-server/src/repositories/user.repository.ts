import User from "../entities/user.entity";
import { UserType } from "../types/user.type";
import { DatabaseConnectionError } from "../exception/index.exception";
import { MSG_ERROR } from "../common/msg.error";

class UserRepository {
  async create(newData: UserType) {
    try {
      return await User.create({ ...newData });
    } catch (error: any) {
      if (error.status === 500) {
        throw new DatabaseConnectionError(
          MSG_ERROR.DatabaseConnectionException,
          error
        );
      } else {
        throw error;
      }
    }
  }

  async findOneByEmail(email: string) {
    try {
      return await User.findOne({
        where: {
          email,
        },
      });
    } catch (error: any) {
      if (error.status === 500) {
        throw new DatabaseConnectionError(
          MSG_ERROR.DatabaseConnectionException,
          error
        );
      } else {
        throw error;
      }
    }
  }
}

export default UserRepository;
