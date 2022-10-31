const Negocio = require("../models/negocio");

exports.registrarNegocio = async (req, res) => {
    const { nombre, ciudad, telefono,correo } = req.body;

    Usuario.findOne({ correo }).then((usuario) => {
        if (!nombre || !ciudad || !telefono || !correo) {
            res.json({ mensaje: "falta informacion" })
        } else {
            const nuevoNegocio = new Negocio({
                nombre,
                ciudad,
                telefono,

            });
            nuevoNegocio.save().then((negocio) => {
                res.json({ mensaje: "negocio creado", negocio });
            })
                .catch((error) => console.error(error));
        }
    })
}
