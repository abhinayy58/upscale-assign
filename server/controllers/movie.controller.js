const Movie = require("../models/movie.model");
const { movieSchema } = require("../utils/movie.validation");

exports.createmovie = async (req, res) => {
  try {
    await movieSchema.validate(req.body);
    const movie = await Movie.create(req.body);
    res.status(201).json(movie);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.Getmovies = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const offset = (page - 1) * limit;

    const { count, rows } = await Movie.findAndCountAll({
      limit,
      offset,
      order: [["createdAt", "DESC"]],
    });

    res.json({
      total: count,
      page,
      totalPages: Math.ceil(count / limit),
      movies: rows,
    });
  } catch (error) {
    console.error("Error fetching movies:", error);
    res.status(500).json({ message: "Server error" });
  }
};

exports.updatemovie = async (req, res) => {
  const { id } = req.params;

  try {
    await movieSchema.validate(req.body);
    const [updated] = await Movie.update(req.body, { where: { id } });
    if (!updated) return res.status(404).json({ error: "movie not found" });

    const updatedmovie = await Movie.findByPk(id);
    res.json(updatedmovie);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.deletemovie = async (req, res) => {
  const { id } = req.params;

  try {
    const deleted = await Movie.destroy({ where: { id } });
    if (!deleted) return res.status(404).json({ error: "movie not found" });

    res.json({ message: "movie deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
