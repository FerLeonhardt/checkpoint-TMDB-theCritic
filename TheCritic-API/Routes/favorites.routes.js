const express = require('express');
const router = express.Router();
const { favoritesController } = require('../Controllers/index');

// creo un favorite.

router.post('/', favoritesController.createFavorite);

// hay que encontrar los favorites por userId
//router.get('/:userId', favoritesController.findFavorite); esto era cuando el id venia por params
router.get('/', favoritesController.findFavorite);// cuando valla a la base de datos a buscar, se lo pasamos por req.user.id, no req. body

//eliminar favorito de la lista
router.delete('/:id', favoritesController.destroyFavorite);

module.exports = router;
