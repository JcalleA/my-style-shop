const bcrypt = require("bcrypt");
const Usuario = require("../models/usuarios");
const jwt = require("jsonwebtoken");

const login = async (req, res) => {
    const { correo, password } = req.body;

    Usuario.findOne({ correo }).then((usuario) => {
        if (!usuario) {
            return res.json({ mensaje: "Usuario no encontrado" });
        }

        bcrypt.compare(password, usuario.password).then((esCorrecta) => {
            if (esCorrecta) {
                const { id, nombre } = usuario;

                const data = {
                    id,
                    nombre,
                };

                const token = jwt.sign(data, "secret", {
                    expiresIn: 86400 /* 24hs */,
                });

                res.json({
                    mensaje: "Usuario logeado correctamente",
                    usuario: {
                        id,
                        nombre,
                        token,
                    },
                });
            } else {
                return res.json({ mensaje: "Contraseña incorrecta" });
            }
        });
    });
};

module.exports = login;