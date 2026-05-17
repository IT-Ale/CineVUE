const { Router } = require('express');
const controller = require('./utenti_controller');
const router = Router();

router.get('/', controller.getUtentiList);

module.exports = router;