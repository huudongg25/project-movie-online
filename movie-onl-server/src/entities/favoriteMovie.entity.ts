import { DataTypes } from "sequelize";
import sequelize from "../configs/db.config";
import User from "./user.entity";
import Movie from "./movie.entity";
const FavoriteMovie = sequelize.define(
  "favoriteMovies",
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
FavoriteMovie.belongsTo(User, {
  foreignKey: "userId",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});
User.hasMany(FavoriteMovie, {
  foreignKey: "userId",
});
FavoriteMovie.belongsTo(Movie, {
  foreignKey: "movieId",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});
Movie.hasMany(FavoriteMovie, {
  foreignKey: "movieId",
});

export default FavoriteMovie;
