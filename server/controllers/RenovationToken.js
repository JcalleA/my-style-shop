const response  = require("express");
const generarToken = require("../helpers/jwt");
const Empleado = require("../models/empleado");
const User = require("../models/usuarios");

const renovarToken = async (req, res = response) => {
    try {
        const empleado = await Empleado.findById(req.id);
        const usuario = await User.findById(req.id);
        if (!empleado) {
            return res.status(400).json({
                ok: false,
                msg: "El id de este usuario no exite",
            });
        }
        if (empleado && usuario) {
            return res.status(400).json({
                ok: false,
                msg: "Hay un empleado y usuario con el mismo id",
            });
        }
        if (usuario) {
            const token = await generarToken(req.id, usuario.nombre);
            res.json({
                ok: true,
                token,
                user: {
                    type: "user",
                    id: usuario.id,
                    nombre: usuario.nombre,
                },
            });
        } else {
            const { id, nombre, cortes, calificacion, perfil } = empleado;
            const token = await generarToken(id, nombre);
            res.json({
                ok: true,
                token,
                user: {
                    id, 
                    nombre,
                    cortes: cortes || [],
                    calificacion: calificacion || [],
                    perfil: perfil || null,
                    type: "empleado",
                },
            });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({
            ok: false,
            msg: "Eror de servidor renovando token",
        });
    }
}

module.exports = renovarToken;