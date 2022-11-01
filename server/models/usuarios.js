const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const usuarioSchema = new Schema({
    
    nombre: {type:String, required: true},
    apellido: String,
    correo: {type:String, required: true, unique: true}, 
    password: {type:String, required: true},
    telefono: {type: String, required: false},
    hora: {type: Date, required: false},
    imagenUrl: {String, required: false},
    trabajador: {type: Boolean},
    negocio:{ type: Schema.ObjectId, ref: "Negocio" },
    

});

module.exports = mongoose.model("Usuario", usuarioSchema);