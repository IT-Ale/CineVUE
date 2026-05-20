const { Router } = require('express');
const controller = require('./utenti_controller');
const router = Router();

router.get('/', controller.getUtentiList);
router.post('/login', controller.loginUser);

module.exports = router;