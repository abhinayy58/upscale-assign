const fs = require("fs");
const path = require("path");
const Movie = require("../models/movie.model");
const sequelize = require("../config/db");

async function insertDataFromFile() {
  try {
    const filePath = path.join(__dirname, "../data.json");
    const jsonData = fs.readFileSync(filePath, "utf-8");
    const movieList = JSON.parse(jsonData);

    await sequelize.sync(); // ensure table exists

    for (const movie of movieList) {
      const exists = await Movie.findOne({ where: { title: movie.title } });
      if (!exists) {
        await Movie.create(movie);
        console.log(`✅ Inserted: ${movie.title}`);
      } else {
        console.log(`⚠️ Skipped (already exists): ${movie.title}`);
      }
    }

    console.log("🎉 Finished inserting dummy data.");
  } catch (err) {
    console.error("❌ Failed to insert data:", err);
  } 
}

module.exports = insertDataFromFile;
