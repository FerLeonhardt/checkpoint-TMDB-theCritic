const userVerification = (req, res) => res.status(200).send(req.user); // simplemente le enviamos el usuario, porqie sigue logueado.

module.exports = { userVerification }; // con las llaves, para seguir la logica de los controllers.
