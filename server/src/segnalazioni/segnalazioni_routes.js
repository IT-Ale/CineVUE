const { Router } = require('express');
const controller = require('./segnalazioni_controller');
const router = Router();

router.get('/', controller.getSegnalazioniList);
router.get('/old', controller.getOldSegnalazioni);
router.post('/', controller.addSegnalazione);

module.exports = router;
