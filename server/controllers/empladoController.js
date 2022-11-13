const { response } = requiere("express");
const { generarToken } = require("../helpers/jwt");
const bcrypt = require("bcrypt");

const Empleado = requiere("../models/empleado");
const Usuario = requiere("../models/usuarios");

exports.crearEmpleado = async (req, res = response) => {
    const { email, password } = req.body;

    try {
        //verificar email repetido
        let empleado = await Empleado.findOne({ email });

        if ( empleado ) {
            return res.status(400).json({
                ok: false,
                msg: "Ya existe un empleado con este correo.",
            });
        }
        //creamos el usuario
        let nuevoEmpleado = new Empleado(req.body);
        //encriptamos contraseña
        const salt = await bcrypt.genSalt(10) //definir caracter maximo para contraseña
        nuevoEmpleado.password = await bcrypt.hash(password, salt);
        //guardar el emplado en bd
        await nuevoEmpleado.save();
        const { id, nombre, cortes, calificacion, perfil } = nuevoEmpleado;
        //generamos el token con la info del emplado
        const token = await generarToken(nuevoEmpleado.id, nuevoEmpleado.nombre);
        //respuesta al server
        res.status(201).json({
            ok: true,
            token,
            id: id,
            user: {
                id,
                nombre,
                cortes,
                calificacion,
                perfil,
                type: "empleado",
            },
        });
        // en caso de error mostramos error de servidor
    } catch (error) {
        console.error(error);
        res.status(500).json({
            ok: false,
            msg: "Error en la peticion",
        });
    }
};

exports.loginEmpleado = async (req, res = response) => {
    
    const { email, password } = req.body;

    try {

        const empleado = await Empleado.findOne({ email });

        if (!empleado) {
            return res.status(400).json({
                ok: false,
                msg: "credenciales incorrectos",
            });
        }

        const { id, nombre, cortes, calificacion, perfil } = empleado;
        const validarPassword = bcrypt.compareSync(password, empleado.password);

        if (!validarPassword) {
            return res.status(400).json({
                ok:false,
                msg: "Contraseña incorrecta",
            });
        }

        const token = await generarToken(id, nombre);
        res.json({
            ok: true,
            token,
            user: {
                id, 
                nombre,
                cortes,
                calificacion,
                perfil,
                type: "empleado",
            },
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            ok: false,
            msg: "Error en el servidor",
        });
    }
};

exports.obtenerEmpleados = async (req, res = response) => {
    try {
        const empleado = await Empleado.findById(req.id);
        const cliente = await Usuario.findById(req.id);

        if (empleado) {
            return res.status(401).json({
                ok: false,
                msg: "Un empleado no puede solicitar datos",
            });
        }

        if (!cliente) {
            return res.status(404).json({
                ok: false,
                msg: "id en el token invalido",
            });
        }

        const empleados = await Empleado.find().select("-email -password -__v");
        res.json({
            ok: false,
            empleados,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            ok: false,
            msg: "Error en el servidor",
        });
    }
};

exports.updateEmpleado = async (req, res = response) => {
    const empeladoId = req.params.id;
    const calificacion = req.body.calificacion;

    try {
        const empleado = await Empleado.findById(empeladoId);
        const id = req.id;
        if (calificacion) {
            const usuario = await Usuario.findById(id);
            if (!usuario) {
                return res.status(404).json({
                    ok: false,
                    msg: "No extie usuario con ese id",
                });
            }
            await actualizadoEmplado();
            return;
        }
        if (!emplado) {
            return res.status(404).json({
                ok:false,
                msg: "No existe empleado con ese id",
            });
        }
        if (empleado.id !== id ) {
            return res.status(401).json({
                ok: false,
                msg: "Este empleado no tiene permitido actualizado esta informacion"
            });
        }
        
        async function actualizadoEmplado() {
            const newEmpleado = {...req.body };
            const { cortes: newCortes, calificacion: newCalificacion } = newEmpleado;
            delete newEmpleado.cortes;
            delete newEmpleado.calificacion;
            const empleadoActualizado = await Empleado.findByIdAndUpdate(
                empeladoId,
                {
                    $set: {... newEmpleado },
                    $push: {
                        cortes: newCortes,
                        calificacion: newCalificacion,
                    },
                },
                {
                    new: true
                }
            );
            
            const { nombre, perfil, cortes, calificacion } = empleadoActualizado;
            res.json({
                ok:true,
                user: { id, nombre, perfil, cortes, calificacion, type: "empleado"},
            });
        };
    } catch (error) {
        console.error(erro);
        res.status(500).json({
            ok: false,
            msg: "Error servidor",
        });
    }
};

exports.deleteCortesEmpleado = async (req, res = response) => {
    const empleadoId = req.params.id;
    const corteToDelete = req.body.cortes;

    try {
        const empleado = await Empleado.findById(empleadoId);
        const id = req.id;
        if (!empleado) {
            return res.status(404).json({
                ok: false,
                msg: "No existe empleado con ese id",

            });
        }
        if (empleado.id !== id) {
            return res.status(401).json({
                ok: false,
                msg: "Este emplado no tiene permitdo actualizar esta informacion",
            });
        }
        const newCortes = empleado.cortes.filter(
            (corte) => corte !== corteToDelete
        );
        const empleadoActualizado = await Empleado.findByIdAndUpdate(
            empleadoId,
            {cortes: newCortes},
            {new: true},
        );
        const { nombre, perfil, cortes, calificacion } = empleadoActualizado;
        res.json({
            ok: true,
            user: {
                id, 
                nombre,
                perfil,
                cortes,
                calificacion,
                type: "empleado",
            },
        });
    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: "error servidor",
        });
    }
};