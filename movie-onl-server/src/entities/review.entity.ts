import { DataTypes } from "sequelize";
import sequelize from "../configs/db.config";
import User from "./user.entity";
import Movie from "./movie.entity";
const Review = sequelize.define(
  "reviews",
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
    rattingPoint: {
      type: DataTypes.INTEGER,
    },
    content: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: true,
  }
);
Review.belongsTo(User, {
  foreignKey: "userId",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});
User.hasMany(Review, {
  foreignKey: "userId",
});
Review.belongsTo(Movie, {
  foreignKey: "movieId",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});
Movie.hasMany(Review, {
  foreignKey: "movieId",
});

export default Review;
