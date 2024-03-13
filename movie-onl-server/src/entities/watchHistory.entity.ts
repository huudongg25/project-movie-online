import { DataTypes } from "sequelize";
import sequelize from "../configs/db.config";
import User from "./user.entity";
import Movie from "./movie.entity";
const WatchHistory = sequelize.define(
  "watchHistories",
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
  },
  {
    timestamps: true,
  }
);
WatchHistory.belongsTo(User, {
  foreignKey: "userId",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});
User.hasMany(WatchHistory, {
  foreignKey: "userId",
});
WatchHistory.belongsTo(Movie, {
  foreignKey: "movieId",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});
Movie.hasMany(WatchHistory, {
  foreignKey: "movieId",
});

export default WatchHistory;
