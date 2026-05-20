const { Router } = require('express');
const controller = require('./recensioni_controller');
const router = Router();


router.get('/', controller.getRecensioniList);
router.get('/top-rated', controller.getTopRatedFilms);
router.post('/', controller.addRecensione);



module.exports = router;