// en los archivos index, es donde importamos y exportamos, es como la utopista que funciona como arteria.

const express = require('express'); // requiero la libreria de node.js expres para poder utilizar sus elementos
const router = express.Router(); //Router() es un metodo de express para generar rutas, cuando estan con mayuscula son classes. entonces lo guardo en la variable router para poder utilizarlo mediante el metodo reuter.use()
const verifyToken = require('../middleware/jwt.middleware');

const users = require('./users.routes');
// http://locahost:3001/api/users
//estamos definiendo una de las rutas, para cuando vea en api /users
const favorites = require('./favorites.routes');
// http://locahost:3001/api/favorites

const login = require('./login.routes');
// http://locahost:3001/api/login

const auth = require('./authorization.routes');
// http://locahost:3001/api/auth

const logout = require("./logout.routes")
// http://locahost:3001/api/logout

const register = require("./register.routes")
// http://locahost:3001/api/register

router.use('/users', verifyToken,  users); // esta ruta dice que cuando venga la ruta /users del api, usemos el archivo users.js que esta requerido en la variable users.

router.use('/favorites', verifyToken, favorites); // el middleware, siempre va en el medio entre la ruta y el controlador.

router.use('/login', login);

router.use('/auth', verifyToken, auth);

router.use("/logout", verifyToken, logout)

router.use("/register", register)


module.exports = router;
