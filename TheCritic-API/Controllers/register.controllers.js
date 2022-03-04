const {User} = require("../Models/index")


//Creat un User
const createUser = (req, res, next) => {
    // agarra en la db users, y creame loq ue venga por el body.
    User.create(req.body).then(user => {
      res.status(201).send(user); //cuando se crea, se responde con un status y el dato q queremos, es decir el user.
    });
  };

  module.exports={createUser}