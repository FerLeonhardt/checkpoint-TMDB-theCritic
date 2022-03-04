const User = require('./User.models'); // llamo a donde establesco el modelo de user.
const Favorite = require('./Favorite.models'); // llamoa a donde establesco el modelo de favorite.

//creamos las relaciones:

/* Favorite.belongsTo(User) */ // esta relacion agrega un userId a la tabla de favoritos. realcion tipo 1 a 1.

User.hasMany(Favorite); //relacion que me genera un id del padre al hijo

// investigar si hacer relacion de ida y vuelta

module.exports = { User, Favorite };
