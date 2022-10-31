// const Usuario = require("../models/usuarios");

// const getUser =async(req, res)=>{
//     const {id} = req.params;

//     if (id.length === 24){
//         Usuario.findById(id).then((usuario)=>{
//             if(!usuario){
//                 return res.json({
//                     mensaje:"No se encontro el usuario con id"
//                 });
//             }else {
//                 const {  _password, __v, ...resto} = usuario._doc;
//                 res.json(resto);
//             }
//         });
//     }else {
//         res.json({mensaje:"Contraseña incorrecta"});
//     }
// }

// module.exports = getUser