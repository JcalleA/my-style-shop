const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const usuarioSchema = new Schema({
    
    nombre:{type:String, required: true},
    apellido: String,
    correo: {type:String, required: true, unique: true}, 
    password: {type:String, required: true},
    telefono: Number,
    hora: Date,
    imagenUrl: String,
});

module.exports = mongoose.model("Usuario", usuarioSchema);