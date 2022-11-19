const  response = require("express");
const Cita = require("../models/citas");
const Usuario = require("../models/usuarios");
const Empleado = require("../models/empleado");

exports.crearCitas = async (req, res = response) => {
    const cita = new Cita(req.body);
    try {
        cita.cliente = req.id;
        const empleado = await Empleado.findById(req.body.barbero);
        const usuario = await Usuario.findById(req.id);
        if (!usuario) {
            return res.status(404).json({
                ok: false,
                msg: "Usuario no encontrado",
            });
        }
        if (!empleado) {
            return res.status(404).json({
                ok: false,
                msg: "Barbero no encontrado, intente de nuevo",
            });
        }

        const guardarCita = await cita.save();
        res.json({
            ok: true,
            msg: "La citacion fue enviada, espere a que el barbero le confirme",
            newCita: guardarCita,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            ok: false,
            msg: "Error en el servidor",
        });
    }
}
exports.obtenerCitas = async (req, res = response) => {
    idSolicitante = req.id;
    try {
        const user = await Usuario.findById(idSolicitante);
        const empleado = await Empleado.findById(idSolicitante);

        if (!user && !empleado) {
            return res.status(401).json({
                ok: false,
                msg: "Id del token no encontro usuarios referentes",
            });
        }

        const citas = empleado 
        ? await Cita.find({ barbero: idSolicitante }).populate("cliente", {
                nombre: 1 
            }) 
        : await Cita.find({ cliente: idSolicitante }).populate("barbero", {
             nombre: 1, 
             perfil: 1 
            });

        res.json({
            ok: true,
            citas,
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({
            ok: false,
            msg: "Error en el servidor",
        });
    }
}

exports.actualizarCitas = async (req, res = response) => {
    const idCita = req.params.id;
    try {
        const cita = Cita.findById(idCita);
        if (!cita) {
            return res.status({
                ok: false,
                msg: "La cita que intenta actualizar no existe",
            });
        }
        const cliente = await Usuario.findById(req.id);
        const empleado = await Empleado.findById(req.id);
        if (!cliente && !empleado) {
            return res.status(400).json({
                ok: false,
                msg: "No existe un empleado o cliente con este  id identificado en el token",
            });
        }
        if (cliente) {
            if (cita.cliente.toString() !== req.id) {
                return res.status(401).json({
                    ok: false,
                    msg: "No tiene permitido actualizar esta cita",
                });
            }
            if (req.body.estado !== undefined) {
                return res.status(401).json({
                    ok: false,
                    msg: "Los clientes no tienen permitidos actualizar el estado de las citas",
                });
            }
            const nuevaCita = {
                ...req.body,
                cliente: req.id,
            };
            const citaActualizada = await cita.findByIdAndUpdate(idCita, nuevaCita,  {
                new: true,
            });
            res.json({
                ok: true,
                citaActualizada,
                msg: "La cita fue actualizada correctamente",
            });
        } else {
            if (cita.barbero.toString() !== req.id) {
                return res.status(401).json({
                    ok: false,
                    msg: "No tiene permiso de actualizar esta cita",
                });
            }
            const citaActualizada = await Cita.findByIdAndUpdate(
                idCita,
                { estado: req.body.estado },
                { new: true },
            );
            res.json({
                ok: true,
                citaActualizada,
                msg: "La cita se actualizao correctamente",
            });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({
            ok: false,
            msg: "Error en el servidor",
        });
    }
};

exports.eliminarCita = async(req, res = response) => {
    const idCita = req.params.id;
    try {
        const cita = await Cita.findById(idCita);
        if (!cita) {
            return res.status(404).json({
                ok: false,
                msg: "La cita que va a elimiar no existe",
            });
        }
        let idSolicitante = cita.cliente.toString() === req.id ? cita.cliente.toString() : cita.barbero.toString();
        if (idSolicitante) {
            return res.status(401).json({
                ok: false,
                msg: "No tiene permiso para eliminar la cita",
            });
        }
        await Cita.findByIdAndDelete(idCita);
        res.json({
            ok: true,
            msg: "La cita fue eliminada correctamente",
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            ok: false,
            msg: "Error en el servidor",
        });
    }
}