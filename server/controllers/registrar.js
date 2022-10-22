const bcrypt = require('bcrypt');
const Usuario = require('../models/usuarios');

const registrar =async(req, res)=>{
    const{nombre, correo, password}= req.body;
    
    Usuario.findOne({correo}).then((usuario) => {
        if(usuario){
            return res.json({mensaje:"ya existe el correo"})
        }else if (!nombre||!correo||!password){
            res.json({mensaje:"falta informacion"})
        }else {
            bcrypt.hash(password,10,(error,passwordHasheado)=>{
                if (error) res.json({error});
                else{
                    const nuevoUsuario= new Usuario({
                        nombre,
                        correo,
                        password: passwordHasheado,
                    });
                    nuevoUsuario.save().then((usuario)=>{
                        res.json({mensaje:"usuario creado", usuario});
                    })
                    .catch((error)=>console.error(error));
                }
            })
        }
    })

}

module.exports = registrar