const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const usuarioSchema = new Schema({
    
    nombre: {type:String, required: true},
    apellidos: {type:String, required: true},
    correo: {type:String, required: true, unique: true}, 
    password: {type:String, required: true},
    telefono: {type: String, required: true},
    hora: {type: Date, required: true},
    imagenUrl: {type: String, required: true},
    trabajador: {type: Boolean},
    negocio:{ type: Schema.ObjectId, ref: "Negocio" },
    

});

module.exports = mongoose.model("Usuario", usuarioSchema);