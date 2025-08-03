const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const movie = sequelize.define("movie", {
  title: { type: DataTypes.STRING, allowNull: false },
  type: { type: DataTypes.ENUM("Movie", "TV Show"), allowNull: false },
  director: DataTypes.STRING,
  budget: DataTypes.STRING,
  location: DataTypes.TEXT,
  duration: DataTypes.STRING,
  year_time: DataTypes.STRING,
});

module.exports = movie;
 