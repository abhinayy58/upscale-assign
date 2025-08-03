require("dotenv").config();
const app = require("./app");
const db = require("./config/db");
const  insertDataFromFile  = require("./seed/insertData");

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  try {
    await db.authenticate();
    console.log("Database connected successfully");

    await db.sync({ alter: true });
    console.log("Database synchronized");

   await insertDataFromFile();
   console.log("Dummy data inserted successfully");

    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}/`);
    });
  } catch (error) {
    console.error("Failed to start server:", error);
    process.exit(1);
  }
};

startServer();
