const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const negocioSchema = new Schema({
    ciudad: String,
    telefono: {type: String, required: false},
    correo: {type:String, required: true, unique: true},
    nombre: String,
    servicios: { type: Schema.ObjectId, ref: "Servicio" }
});

module.exports = mongoose.model("Negocio", negocioSchema);