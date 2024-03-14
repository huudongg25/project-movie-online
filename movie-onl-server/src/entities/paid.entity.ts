import { DataTypes } from "sequelize";
import sequelize from "../configs/db.config";
import User from "./user.entity";
import Movie from "./movie.entity";
const Paid = sequelize.define(
  "paid",
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
    movieId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    billingInformation: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: true,
  }
);
Paid.belongsTo(User, {
  foreignKey: "userId",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});
User.hasMany(Paid, {
  foreignKey: "userId",
});
Paid.belongsTo(Movie, {
  foreignKey: "movieId",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});
Movie.hasMany(Paid, {
  foreignKey: "movieId",
});

export default Paid;
