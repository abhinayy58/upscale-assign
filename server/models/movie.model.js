const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");
const { uniq } = require("lodash");

const movie = sequelize.define("movie", {
  title: { type: DataTypes.STRING, allowNull: false,unique: true },
  type: { type: DataTypes.ENUM("Movie", "TV Show"), allowNull: false },
  director: DataTypes.STRING,
  budget: DataTypes.STRING,
  location: DataTypes.TEXT,
  duration: DataTypes.STRING,
  year_time: DataTypes.STRING,
});

module.exports = movie;
  