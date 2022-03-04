const express=require("express")
const router = express.Router()
const {authController}=require('../Controllers/index')// cuando fue exportado con llaves, se importa con llaves.

router.get('/', authController.userVerification)

module.exports=router