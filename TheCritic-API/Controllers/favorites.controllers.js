// llamamos controllers a donde solo se ocntiene la logica de lo que tiene que hacer cuando tiene una peticion por una ruta en particular.
//separamos las rutas de la logica.

const { Favorite } = require('../Models/index');

// creo un favorite.
const createFavorite = (req, res, next) => {
  req.body.userId = req.user.id;// aca le estoy agregando un campo al objeto, por medio del front.

  Favorite.create(req.body).then(favorite => {
    res.status(201).send(favorite);
  });
};
// hay que encontrar los favorites por userId
const findFavorite = (req, res) => {
  const userId = req.user.id;
  Favorite.findAll({
    where: { userId },
    attributes: ['name', 'id', `url_image`],
  }).then(favs => res.status(200).send(favs));
};

//elimino los favoritos de la lista
const destroyFavorite = (req, res) => {
  const id = req.params.id;
  Favorite.destroy({
    where: {
      id,
    },
  }).then(favs => res.status(202).send(`Success DELETING favorites`));
};

module.exports = { createFavorite, findFavorite, destroyFavorite };
