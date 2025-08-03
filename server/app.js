const express = require("express");
const cors = require("cors");
const path = require("path");
const movieRoutes = require("./routes/movie.route");
const { notFound, errorHandler } = require("./utils/errorHandler");

const app = express();
app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, "public")));

app.use("/api/movies", movieRoutes);

const publicPath = path.join(__dirname, "public");
app.use(express.static(publicPath));

app.get("/", (req, res) => {
  res.sendFile(path.join(publicPath, "index.html"));
});
app.use(notFound);
app.use(errorHandler);

module.exports = app;
  