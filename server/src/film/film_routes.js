const { Router } = require('express');
const controller = require('./film_controller');
const router = Router();

router.get('/', controller.getFilmList);
router.post('/', controller.addFilm); // Nuova riga

module.exports = router;