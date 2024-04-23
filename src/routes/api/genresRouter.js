const express = require('express');
const router = express.Router();
const apiGenresController = require('../../controllers/api/genresController');

router.get('/', apiGenresController.listar);
router.get('/:id', apiGenresController.detalle);


module.exports = router;