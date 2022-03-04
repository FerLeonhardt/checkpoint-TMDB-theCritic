const express = require('express');
const { logoutController } = require('../Controllers/index'); // como lo exporto en el index con llaves, lo pongo aca con llaves.
const router = express.Router();

// vamos a hacer un logout con post, porque enviamos el usuario y passwprd por el body.

router.get('/', logoutController.logout);

module.exports = router;
