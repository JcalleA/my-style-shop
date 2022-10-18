const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const puestoSchema = new Schema({
    nombre: String,
    apellido: String,
    telefono: Number,
    hora: Date
});

module.exports = mongoose.model("Usuario", puestoSchema);