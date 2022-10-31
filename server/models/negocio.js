const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const negocioSchema = new Schema({
    nombre: String,
    ciudad: String,
    telefono: String,
    servicio: { type: Schema.ObjectId, ref: "Servicio" }
});

module.exports = mongoose.model("Negocio", negocioSchema);