const { User } = require('../Models/index');

//Creat un User
/* const createUser = (req, res, next) => {
  // agarra en la db users, y creame loq ue venga por el body.
  User.create(req.body).then(user => {
    res.status(201).send(user); //cuando se crea, se responde con un status y el dato q queremos, es decir el user.
  });
}; */

const createUser = async (req, res, next) => {
  try {
    console.log("req.body", req.body);
    // agarra en la db users, y creame loq ue venga por el body.
    const user = await User.create(req.body);
    console.log("usuario creado" , user);
    if(user) return res.status(201).send(user); //cuando se crea, se responde con un status y el dato q queremos, es decir el user.
  } catch (error) {
    return res.status(500).send(error);
  }
};

module.exports = { createUser };
