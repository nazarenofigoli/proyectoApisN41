const db = require("../../database/models");
const sequelize = db.sequelize;

const moviesController = {
  listar: (req, res) => {
    try {
      db.Movie.findAll().then((movies) => {
        res.status(200).json({
          meta: {
            status: 200,
            total: movies.length,
            url: "api/movies",
          },
          data: {
            movies,
          },
        });
      });
    } catch (error) {
      return res.status(404).send(error.message);
    }
  },
  detalle: (req, res) => {
    try {
      db.Movie.findByPk(req.params.id).then((movie) => {
        return res.status(200).json({
          meta: {
            status: 200,
            url: `api/movies/${req.params.id}`,
          },
          data: {
            movie,
          },
        });
      });
    } catch (error) {
      return res.status(404).send(error.message);
    }
  },
  crear: (req, res) => {
    try {
      db.Movie.create(req.body)
        .then((movie) => {
          return res.status(200).json({
            status: 200,
            data: movie,
          });
        })
        .catch((error) => res.send(error));
    } catch (error) {
      return res.status(404).send(error.message);
    }
  },
  borrar: function (req, res) {
    let movieId = req.params.id;
    db.Movie.destroy({ where: { id: movieId } }).then((response) => {
      return res.status(200).send("Pelicula borrada exitosamente");
    });
  },
};

module.exports = moviesController;
