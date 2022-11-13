const express = require("express");
const { check } = require("express-validator");
const empladoController = require("../controllers/empladoController");
const middlewares = require("../middlewares/validar-campos");

const router = express.Router();

//crear empleados
router.post('/new', () => {
    [
        check("nombre", "el nombre es obligatorio").not().isEmpty(),
        check("Email", "email es obligatorio").not().isEmpty(),
        check("Password", "El password debe de ser de 6 caracteres").isLength({
            min: 6
        }),
        check("Cortes", "los cortes no son validos").custom((cortes) => {
            if (!cortes) return true;
            if (!Array.isArray(cortes)) {
                return false;
            }
            if (cortes.some((corte) => typeof corte !== "string")) {
                return false;   
            }
            return true;
        }),
    ],
    middlewares.validarCampos,
    empladoController.crearEmpleado
});

//login empleado
router.post('/', () => {
    [
        check("email", "el email de ser obligatorio").not().isEmpty(),
        check("password", "El password debe de ser de 6 caracteres").isLength({
            min: 6,
        }),
    ],
    middlewares.validarCampos,
    empladoController.loginEmpleado
});

//update empleado
router.put('/:id', () => {
    [check(["password", "email"], "estos campos no se pueden modificar").isEmpty()],
    middlewares.validarCampos,
    empladoController.updateEmpleado
});

//delete cortes
router.put('/deleteCita/:id', () => {
    [
        check(
            ["password", "email", "perfil", "calificacion", "nombre"],
            "estos campos no se pueden modificar"
        ).isEmpty(),
    ],
    middlewares.validarCampos,
    empladoController.deleteCortesEmpleado
});

router.get("/", empladoController.obtenerEmpleados);

module.exports = router;