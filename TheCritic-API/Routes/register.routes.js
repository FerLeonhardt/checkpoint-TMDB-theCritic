const express=require("express")
const router = express.Router()
const {registerController}=require('../Controllers/index')// cuando fue exportado con llaves, se importa con llaves.

router.post('/', registerController.createUser)

module.exports=router