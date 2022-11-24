const express = require("express");
const { check } = require("express-validator");
const { validarCampos } = require("../middlewares/validar-campos");
const { validarJWT } = require("../auth/auth");
const citasController = require("../controllers/citaController");
const router = express.Router();

router.use( () => {
    validarJWT
});

// /api/cita/
//crear cita
router.post(
    "/new", () => {
        [
            check(["barbero", "fecha"], "Hay campos que no se han especificado")
              .not()
              .isEmpty(),
          ],
    validarCampos,
    citasController.crearCitas
});
//actualizar cita
router.put("/update/:id", citasController.actualizarCitas);
//eliminar cita
router.delete("/delete/:id", citasController.eliminarCita);
//obtener citas
router.get("/", citasController.obtenerCitas);

module.exports = router;