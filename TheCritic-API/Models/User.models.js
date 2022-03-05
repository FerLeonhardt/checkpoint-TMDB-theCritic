// como es un modelo, lo ponemos con mayuscula en el archivo, y en singular.
// aca vamos acrear los modelos para las tablas de la db.
const S = require('sequelize');
const db = require('../Config/db');
const bcrypt = require('bcrypt');// antes instalamos la libreria

class User extends S.Model {}

//Inicializar la tabla
User.init(
  {
    //Campos
    name: {
      type: S.STRING,
      allowNull: false, // aca con false, no permitimos que quede vacio este campo.
    },
    lastName: {
      type: S.STRING,
      allowNull: false, // aca con false, no permitimos que quede vacio este campo.
    },
    userName: {
      type: S.STRING,
      allowNull: false, // aca con false, no permitimos que quede vacio este campo.
    },
    password: {
      type: S.STRING,
      allowNull: false, // aca con false, no permitimos que quede vacio este campo.
      validate: {
        is: "^[A-Za-z]+((s)?(('|-|.)?([A-Za-z])+))*$",// mediante una expresion regular
      }, 
    },
    salt: {
      //se usa por dentro para el hook beforeCreate para el hasheo, vamos a guardar la cantidad de capas
      type: S.STRING,
    },
    /* fullname: {
      type: S.VIRTUAL,
      get() {
                return `${this.name} ${this.lastName}`;
      },
    }, */
  },
  //Conexion con db y nombre del modelo
  {
    sequelize: db,
    modelName: 'user',
  }
);

//para hacer el hasheo hay que hacer un hook, los cuales modifican el modelo.
User.beforeCreate(user => {
  return bcrypt
    .genSalt(16) //genSalt son las capas q va a utilizar para hacer el hash
    .then(salt => {
      user.salt = salt; // user.salt se refiere insertarlo en el modelo de la tabla
      return bcrypt.hash(user.password, user.salt); //user.hash() convierte en un string irreconosible el string que yo le paso.
    })
    .then(hash => {
      user.password = hash; //reemplazo el password del model perteneciente al usuario, lo reemplaza por la hash creada.
    });//recorda que hash, es lo que me devuelven las 2 promesas anteriores.
});

// metodo de instancia es cuando lo utilizo a partir de una instancia, es decir que utilizo la plantilla del modelo y creo un usuario, ahi puedo usar ese metodo.
module.exports = User;
