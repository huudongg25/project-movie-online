import { Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config();
const sequelize = new Sequelize(
  'movie',
  'root',
  'vovanhieu99',
  {
    host: 'localhost',
    dialect: "mysql",
  }
);
export default sequelize;
