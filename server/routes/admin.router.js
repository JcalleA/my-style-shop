const express = require("express");
const {check } = require ("express-validator");
const adminController = require("../controllers/adminController");
const middlewares = require("../middlewares/validar-campos");

const router = express.Router();


router.post('/', () => {
    [
        check("password", "El empleado debe de ser de 6 caracteres").isLength({
            min: 6
        }),
    ],
    middlewares.validarCampos,
    adminController.validaAdmin
});

module.exports = router;