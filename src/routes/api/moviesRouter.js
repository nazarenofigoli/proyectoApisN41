const express = require('express');
const router = express.Router();
const apiMoviesController = require('../../controllers/api/moviesController');


router.get('/', apiMoviesController.listar);
router.get('/:id', apiMoviesController.detalle);
router.post('/crear', apiMoviesController.crear);
router.delete('/:id', apiMoviesController.borrar);


module.exports = router;