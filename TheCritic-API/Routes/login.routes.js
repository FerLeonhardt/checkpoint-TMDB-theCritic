const express = require('express');
const { loginController } = require('../Controllers/index'); // como lo exporto en el index con llaves, lo pongo aca con llaves.
const router = express.Router();

// vamos a hacer un loging con post, porque enviamos el usuario y passwprd por el body.

router.post('/', loginController.login);

module.exports = router;
