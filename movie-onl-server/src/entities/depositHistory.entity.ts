import { DataTypes } from "sequelize";
import sequelize from "../configs/db.config";
import User from "./user.entity";
const DepositHistory = sequelize.define(
  "depositHistories",
  {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      unique: true,
      autoIncrement: true,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    amount: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
      defaultValue: 0,
    },
  },
  {
    timestamps: true,
  }
);
DepositHistory.belongsTo(User, {
  foreignKey: "userId",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});
User.hasOne(DepositHistory, {
  foreignKey: "userId",
});
export default DepositHistory;
