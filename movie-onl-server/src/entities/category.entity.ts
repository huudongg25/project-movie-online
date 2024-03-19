import { DataTypes } from "sequelize";
import sequelize from "../configs/db.config";
const Category = sequelize.define(
  "categories",
  {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      unique: true,
      autoIncrement: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    describe: {
      type: DataTypes.STRING(500),
      allowNull: false,
    },
  },
  {
    timestamps: true,
  }
);
export default Category;
