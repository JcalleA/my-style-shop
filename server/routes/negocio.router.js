const express = require('express');
const router = express.Router();
const negocioController = require('../controllers/negocio.controller');
const auth = require('../auth/auth');

//post
router.post('/registrar', negocioController.registrar);

// router.post('/login', negocioController.login);

// //get
// // router.get('/getUsers', usuarioController.find);
router.get('/getnegocio', auth , negocioController.getNegocio);
// //put
// router.put('/update', negocioController.update);
// //delete
// router.delete('/deleteUser/:id', negocioController.remove);

module.exports = router;