// llamamos controllers a donde solo se contiene la logica de lo que tiene que hacer cuando tiene una peticion por una ruta en particular.
//separamos las rutas de la logica.

const { User, Favorite } = require('../Models/index');


//Encontrar todos los Users
const findUsers = (req, res, next) => {
  let query = {}; // es la forma de agregar querys
  const { userName } = req.query;
  if (userName) {
    query.userName = userName; // le asiqnamos  q query, nuestro objeto vacio, un nuevo valor. esto es si hay muchos query
  }
  User.findAll({ where: query, include: Favorite }).then(users => {
    res.send(users);
  });
};

//Encontrar un User por su id
const getUserById = (req, res) => {
  const id = req.params.id;
  User.findOne({
    where: { id },
    attributes: ['userName', 'id'],
    include: Favorite, //me va a mostrar esto, nada mas.
  }).then(user => {
    user ? res.send(user) : res.sendStatus(404);
  });
};

module.exports = {findUsers, getUserById };
