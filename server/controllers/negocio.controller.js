const Negocio = require("../models/negocio");
const Usuario = require("../models/usuarios");

exports.registrar = async (req, res) => {
    const { nombre, ciudad, correo, telefono, id } = req.body;

    Negocio.findOne({ correo }).then((negocio) => {
        if (negocio) {
            return res.json({ mensaje: "Este correo ya tiene asociado un negocio" })
        } else if (!nombre || !ciudad || !correo || !telefono) {
            res.json({ mensaje: "Hay datos por ingresar" });
        } else {
            const nuevoNegocio = new Negocio({
                nombre,
                ciudad,
                correo,
                telefono,
            });
            nuevoNegocio.save().then((negocio) => {
                const datos = negocio
                const idNegocio = datos.id
                const idUsuario = id
                const usuario = {
                    negocio: idNegocio,
                }
                Usuario.findByIdAndUpdate(idUsuario, { $set: usuario }, (err) => {
                    if (err) {
                        console.error("Error:", err);
                        response.exito = false;
                        response.msg = "Error al actualizar  el usuario";
                        res.json(response)
                        return;
                    }
                });
                res.json({
                    mensaje: "Negocio registrado correctamente", negocio
                });
            }).catch((error) => console.error('Error al guardar el usuario', error));
        }
    });
}