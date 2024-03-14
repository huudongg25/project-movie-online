import UserRepository from "../repositories/user.repository";
import { UserType } from "../types/user.type";

class UserService {
  private userRepository: UserRepository;
  constructor() {
    this.userRepository = new UserRepository();
  }

  async create(newData: UserType): Promise<UserType> {
    try {
      return (await this.userRepository.create(newData)).dataValues;
    } catch (error) {
      throw error;
    }
  }
}
export default UserService;
