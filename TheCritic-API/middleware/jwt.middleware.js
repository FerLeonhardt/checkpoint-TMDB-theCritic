// algo que s emete en el medio de la declaracion de la ruta y ejecuta su ruta. en este caso, las rutas y los controllers.
// vamos a procesar la info que viene de la request y nosotros le vamos a agregar un dato para el controller.

const { User } = require('../Models/index');
const jwt = require('jsonwebtoken'); // me genera un token medio del metodo sign, para usarlo como pase del usuario hacia las diferentes rutas de mi api.

const jwtSecret = 'secret';

const verifyToken = async (req, res, next) => {
  //como es un middleware, tiene estos parametros.
  //try y catch es lo que siempre voy a hacer cuando hago una petision.
  try {
    const token = req.headers.authorization.split("Bearer ").join('')
    //console.log('token:', token);
    if (!token)
      return res.status(200).send({ msg: 'Token no provisto', token: null }); // hacemos un condicional simple, para no perder tiempo.

    const decoded = jwt.verify(token, jwtSecret); // de existir nos decodificaria el token.
    //console.log('decoded', decoded);
    req.user = decoded; // le agregamos al objeto req, el elemento user, y e este le ponemos el key decoded

    const user = await User.findByPk(decoded.id);
    if (!user)
      return res
        .status(200)
        .send({ msg: 'usuario no encontrado', token: null });

    next(); //terminamos. continua con otra cosa.
  } catch (error) {
    res.status(200).send({ msg: 'Token invalido', token: null });
  }
};

module.exports = verifyToken;
