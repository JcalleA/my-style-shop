const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const negocioSchema = new Schema({
    nombre: String,
    abierto: Boolean,
    ciudad: String,
    puesto: { type: Schema.ObjectId, ref: "Servicio" }
});

module.exports = mongoose.model("Negocio", negocioSchema);