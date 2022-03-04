//aca es donde cree la database
const Sequelize = require("sequelize");

const db = new Sequelize("theCritic", null, null, {
  host: "localhost",
  dialect: "postgres",
  logging: false,// no muetsra el pordetras de como trabaja las tablas de la base de datos.
});

module.exports = db;

// cuando dice new sequelize, creamos una instancia de sequelize y generamos una instancia de la db. le damos la configuracion que va a necesitar.