const Usuario = require("../models/usuarios");

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

let response = {
    msg: "",
    exito: false
}

//get all employee
exports.find = (req, res) => {
    Usuario.find((err, usuarios) => {
        res.json(usuarios)
    }, console.error("error al consultar los usuarios"));
}
//find one employee
exports.findOne = (req, res) => {
    Usuario.findOne({
        _id: req.params.id
    },
        (err, usuario) => {
            res.json(usuario)
        }, console.error(err));
}

//update usuario
exports.update = () => {
    let usuario = {
        nombre: req.body.nombre,
        apellidos: req.body.apellido,
        correo: req.body.correo,
        password: req.body.password,
        telefono: req.body.telefono,
        imagenUrl: req.body.imagenUrl,
        trabajador: req.body.trabajador
    }
    if (usuario.$isEmpty)
        console.error("Campos vacios");

    Usuario.findByIdAndUpdate(req.params.id, { $set: usuario }, (err) => {
        if (err) {
            console.error("Error:", err);
            response.exito = false;
            response.msg = "Error al actualizar  el usuario";
            res.json(response)
            return;
        }
        response.exito = true;
        response.msg = "El usuario se actualizo correctamente.";
        res.json(response);
    });
}

//delete employee
exports.remove = (res, req) => {
    Usuario.findByIdAndRemove({ _id: req.params.id }, (err) => {
        if (err) {
            console.error("Error:", err);
            response.exito = false;
            response.msg = "Error al eliminar  el usuario";
            res.json(response)
            return;
        }
        if (empleado.id == null)
            console.error("id nulo");

        response.exito = true;
        response.msg = "El usuario se actualizo correctamente.";
        res.json(response);
    });
}

exports.getUser = async (req, res) => {
    const decoded = jwt.verify(req.token, "__secret__");
    const id = decoded.id;
    try {
        if (id.length === 24) {
            Usuario.findById(id)
                .then((usuario) => {
                    if (!usuario) {
                        return res.json({
                            mensaje: "No se encontro el usuario con id"
                        });
                    } else {
                        const { _password, __v, ...resto } = usuario._doc;
                        res.json(resto);
                    }
                });
        } else {
            res.json({ mensaje: "Contraseña incorrecta" });
        }
    }
        catch (error) {
        res.json({ mensaje: req.token})}
        
    };
    

exports.login = async (req, res) => {
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

                const token = jwt.sign(data, "__secret__", {
                    expiresIn: 900 /* 15 min */,
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

exports.registrar = async (req, res) => {
    const { nombre, correo, password, apellidos, telefono, imagenUrl, hora, trabajador } = req.body;

    Usuario.findOne({ correo }).then((usuario) => {
        if (usuario) {
            return res.json({ mensaje: "Ya existe este correo" })
        } else if (!nombre || !apellidos || !correo || !password || !telefono || !imagenUrl) {
            res.json({ mensaje: "Hay datos por ingresar" });
        } else {
            bcrypt.hash(password, 10, (error, passwordHasheado) => {
                if (error) res.json({ error });
                else {
                    const nuevoUsuario = new Usuario({
                        nombre,
                        apellidos,
                        correo,
                        password: passwordHasheado,
                        telefono,
                        imagenUrl,
                        hora,
                        trabajador,
                    });
                    nuevoUsuario.save().then((usuario) => {
                        res.json({
                            mensaje: "Usuario registrado correctamente", usuario
                        });
                    }).catch((error) => console.error('Error al guardar el usuario', error));
                }
            });
        }
    });
}


