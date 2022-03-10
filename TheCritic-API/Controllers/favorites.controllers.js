// llamamos controllers a donde solo se ocntiene la logica de lo que tiene que hacer cuando tiene una peticion por una ruta en particular.
//separamos las rutas de la logica.

const { Favorite } = require('../Models/index');

// creo un favorite.
const createFavorite = async (req, res, next) => {
  try {
    req.body.userId = req.user.id; // aca le estoy agregando un campo al objeto, por medio del front.

    /* Favorite.create(req.body).then(favorite => {
      res.status(201).send(favorite);
    }); */
    const favorite = await Favorite.create(req.body);
    if (favorite.id) return res.status(201).send(favorite);
  } catch (error) {
    return res.status(500).send(error);
  }
};
// hay que encontrar los favorites por userId
const findFavorite = async (req, res) => {
  try {
    const userId = req.user.id;
    /* Favorite.findAll({
      where: { userId },
      attributes: ['name', 'id', `url_image`],
    }).then(favs => {
      if (favs.length) return res.status(200).send(favs);
      else return res.status(404).send({ msg: 'favortie not found' });
    }); */
 const favorites = await Favorite.findAll({
      where: { userId },
      attributes: ['name', 'id', `url_image`],
    });

    /* if (favorites.length)  */return res.status(200).send(favorites);
  } catch (error) {
    return res.status(500).send(error);
  }
};

//elimino los favoritos de la lista
const destroyFavorite = async (req, res) => {
  try {
    const id = req.params.id;
    const favorite = await Favorite.destroy({ where: { id } });
    if (favorite) return res.status(202).send(`Success DELETING favorites`);
    else return res.status(404).send({ msg: 'favorite not found' });
  } catch (error) {
    return res.status(500).send(error);
  }
};

module.exports = { createFavorite, findFavorite, destroyFavorite };
