// llamamos controllers a donde solo se contiene la logica de lo que tiene que hacer cuando tiene una peticion por una ruta en particular.
//separamos las rutas de la logica.

const { User, Favorite } = require('../Models/index');

//Encontrar todos los Users
const findUsers = async (req, res, next) => {
  try {
    let query = {}; // es la forma de agregar querys
    const { userName } = req.query;
    if (userName) query.userName = userName; // le asiqnamos  q query, nuestro objeto vacio, un nuevo valor. esto es si hay muchos query

    const users = await User.findAll({ where: query, include: Favorite });
    if (users.length) return res.status(200).send(users);
    else return res.status(404).send({ msg: 'user-users not found' });
  } catch (error) {
    return res.status(500).send(error);
  }
};

//Encontrar un User por su id
const getUserById = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await User.findOne({
      where: { id },
      attributes: ['userName', 'id'],
      include: Favorite, //me va a mostrar esto, nada mas.
    });
    if (user?.id) return res.status(200).send(user);
    else return res.status(404).send({ msg: 'user not found' });
  } catch (error) {
    return res.status(500).send(error);
  }
};

module.exports = { findUsers, getUserById };
