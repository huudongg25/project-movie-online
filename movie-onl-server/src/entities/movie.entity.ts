import { DataTypes } from "sequelize";
import sequelize from "../configs/db.config";
import Category from "./category.entity";
const Movie = sequelize.define(
  "movies",
  {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      unique: true,
      autoIncrement: true,
      allowNull: false,
    },
    totalViews: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    director: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    performer: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    categoryId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    manufactureYear: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    describe: {
      type: DataTypes.STRING(500),
      allowNull: false,
    },
    video: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    averageRating: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    datePublication: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    movieDuration: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
    },
  },
  {
    timestamps: true,
  }
);
Movie.belongsTo(Category, {
  foreignKey: "categoryId",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});
Category.hasMany(Movie, {
  foreignKey: "categoryId",
});
export default Movie;
