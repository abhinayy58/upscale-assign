const yup = require("yup");

exports.movieSchema = yup.object({
  title: yup.string().required(),
  type: yup.string().oneOf(["Movie", "TV Show"]).required(),
  director: yup.string().nullable(),
  budget: yup.string().nullable(),
  location: yup.string().nullable(),
  duration: yup.string().nullable(),
  year_time: yup.string().nullable(),
});
