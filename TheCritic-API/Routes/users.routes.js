const express = require('express');
const {usersController} = require('../Controllers/index');// como lo exporto en el index con llaves, lo pongo aca con llaves.
const router = express.Router(); // recorda ferchu, esto es una libreria.

//Encontrar todos los Users
router.get('/', usersController.findUsers);


router.get('/:id', usersController.getUserById);


module.exports = router;
