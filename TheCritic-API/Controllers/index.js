
//es el pasamano en limpio para que del otro lado se requiera solamente haciendo referencia al index.

const usersController = require("./users.controllers")
const favoritesController = require('./favorites.controllers')
const loginController=require('./login.controllers')
const authController=require('./authorizarion.controllers')
const logoutController=require('./logout.controllers')
const registerController=require("./register.controllers")

module.exports={usersController,favoritesController ,loginController, authController, logoutController, registerController}
