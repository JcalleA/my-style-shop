const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarios.controller');
const negocioController = require('../controllers/negocio.controller');

//post
router.post('/registrar', usuarioController.registrar);
router.post('/registrarnegocio', negocioController.registrarNegocio);
router.post('/login', usuarioController.login);
//get
// router.get('/getUsers', usuarioController.find);
router.get('/getuser', usuarioController.getUser);
//put
router.put('/update', usuarioController.update);
//delete
router.delete('/deleteUser/:id', usuarioController.remove);

module.exports = router;