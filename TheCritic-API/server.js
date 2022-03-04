// Configuración del server
// esta es la conexion al servidor localhost
//en el port =3001 voy a trabajar el back.
// voy a usar todas las herramientas de express.

const express = require('express'); //libreria de node.js
const app = express(); //mediante la variable app, ejecuto express, por eso poniendo app.algo puedo usar la herramientas de express
const db = require('./Config/db'); // requiero la db, que hice en config para sincronizarla con los metodos de sequilize.
const routes = require('./Routes/index.js'); // requerimos las rutas que las tenemos en otro lado, estas rutas me van a permitir navegar enytre funcionalidades.
const cors = require('cors'); // lo requerimos porque necesitamos las peticiones.
//app.use es un metodo que me permite usar las herramientas de expres.
const morgan = require('morgan');
//automaticamente por consola, muestra las peticiones del back al front
app.use(cors());
app.use(express.json()); // esto me traduce la info que viene como string para que javaScript lo interprete.
app.use(express.urlencoded({ extended: true })); // urlencoded es algo que me pide express por un problema interno. SI O SI TIENE Q ESTAR

app.use('/api', routes);
// http://locahost:3001/api
//Aca estoy diciendo que voy a usar las routes con las herramientas de express
app.use(morgan('tiny'));

const PORT = 3001;

db.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`Server listening on http://locahost:${PORT}`);
  });
});

// aca sincronizo la DB con mi servidor, lo que me permite es el intercambio de informacion, como ir a una tabla y guardar datos.
// el {force:false} hace q me guarde los datos trabajados, si pongo true, me borra las tablas de la DB, la info no las tablas.
