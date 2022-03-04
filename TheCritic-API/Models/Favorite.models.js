const S = require('sequelize');// es un ORM maneja db.
const db = require('../Config/db');

//aca hacemos una class que se extiende S (que nosotros requerimos esta variable para utilizar sequelice)
class Favorite extends S.Model {}// model es una clase de sequelize. aca Favorite tiene disponible todos los metodos de S.model. extends es lo mismo que decir los hereda.

//Inicializar la tabla
Favorite.init(
  {
    //Campos
    name: {
      type: S.STRING,
      allowNull:false// aca con false, no permitimos que quede vacio este campo.
    },
    url_image: {
      type: S.STRING,
      allowNull:false// aca con false, no permitimos que quede vacio este campo.
    },
    tmdbId: {
      type: S.STRING,
      allowNull:false// aca con false, no permitimos que quede vacio este campo.
    },
  },
  //Conexion con db y nombre del modelo
  {
    sequelize: db,
    modelName: 'favorite',
  }
);

// metodo de instancia es cuando lo utilizo a partir de una instancia, es decir que utilizo la plantilla del modelo y creo un favorito, ahi puedo usar ese metodo.
module.exports=Favorite