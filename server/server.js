const app = require("./app");
const db = require("./config/db");

require("dotenv").config();

const PORT = process.env.PORT || 5000;


const startServer = async () => {
  try {
    await db.authenticate();
    console.log("Database connected successfully");

    await db.sync({ alter: true });
    console.log("Database synchronized");

    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}/`);
    });
  } catch (error) {
    console.error("Failed to start server:", error);
    process.exit(1);
  }
};

startServer();
 