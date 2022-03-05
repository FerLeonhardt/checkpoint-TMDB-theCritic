//aca es donde cree la database
const Sequelize = require("sequelize"); // es un orm para trabajar con db relacionales (manejador de base de datos)

const db = new Sequelize("theCritic", null, null, { //null (nombre del usuario), null (password), si lo configuramos para q existan, son strings
  host: "localhost",
  dialect: "postgres", // mySql, mariaDB 
  logging: false,// no muetsra el pordetras de como trabaja las tablas de la base de datos.
});

module.exports = db;

// cuando dice new sequelize, creamos una instancia de sequelize y generamos una instancia de la db. le damos la configuracion que va a necesitar.