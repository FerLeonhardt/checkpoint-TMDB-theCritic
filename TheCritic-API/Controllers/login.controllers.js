//alguien hace la peticion en la ruta de hacer el loguin, entonces llegamos aca.

const { User } = require('../Models/index');
const bcrypt = require('bcrypt'); // porque la usamos para comparar las password, con la libreria q usamos en el hook de user.models.
const jwt = require('jsonwebtoken'); // me genera un token medio del metodo sign, para usarlo como pase del usuario hacia las diferentes rutas de mi api.

const jwtSecret = 'secret'; // esto lo pongo para comparar cuando genero el token.


const login = async (req, res) => {
  try {
    
    const { userName, password } = req.body; //desestructuro la info qu eme viene por el body.
  
    const user = await User.findOne({ where: { userName } }); // await, le dice a user, 'vamos a esperar hasta que se resuleva, una vez q se resuelve, te guardo en user'
    
    if (!user)return  res.status(200).send({ msg: 'UserName or password not matched' });
  
    const matchPass = bcrypt.compare(password, user.password);
  
    if (!matchPass)
      return res.status(200).send({ msg: 'UserName or password not matched' });
  
    const { id } = user;
    const token = jwt.sign({ id, userName }, jwtSecret, { expiresIn: 86400 });
    /* console.log(token); */
    return res.status(200).send({ token });
  
  } catch (error) {
    return res.status(500).send(error);  
  }
}; 

module.exports = { login }; //exporto con corchetes 
