const express = require('express');
const {usersController} = require('../Controllers/index');// como lo exporto en el index con llaves, lo pongo aca con llaves.
const router = express.Router(); // recorda ferchu, esto es una libreria.

//Creat un User
//router.post('/', usersController.createUser);

//Encontrar todos los Users
router.get('/', usersController.findUsers);

//Encontrar un User por su id
/* router.get("/:id", (req, res) => {
  User.findByPk(req.params.id).then((user) =>
    user ? res.send(user) : res.sendStatus(404)
  );
}); */
router.get('/:id', usersController.getUserById);

/*
//Update User
router.put("/:id", (req, res) => {
  Users.update(req.body, {
    where: { id: req.params.id },
    returning: true,
    plain: true,
  })
    .then((result) => {
      const user = result[1];
      res.json({
        message: "Updated successfully",
        user,
      });
    })
    .catch((err) => {
      res.sendStatus(500);
    });
});

//Encontrar por nombre
router.get("/porNombre/:name", (req, res) => {
  Users.findByName(req.params.name).then((user) => {
    if (!user) {
      res.status(404).send({ message: "Usuario no encontrado por el nombre" });
    } else {
      res.send(user);
    }
  });
});

//Encontrar usuarios con la misma edad
router.get("/mismaEdad/:id", (req, res, next) => {
  User.findOne({
    where: {
      id: req.params.id,
    },
  })
    .then((user) => {
      if (!user) {
        res.sendStatus(404);
      } else {
        return user.sameAge();
      }
    })
    .then((sameAgeUsers) => {
      return res.send(sameAgeUsers);
    })
    .catch((err) => {
      console.log(err);
    });
}); */

module.exports = router;
