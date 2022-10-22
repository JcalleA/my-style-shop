const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const puestoSchema = new Schema({
    numero: Number,
    trabajador: String,
    usuarios: { type: Schema.ObjectId, ref: "Usuarios" }
});

module.exports = mongoose.model("Servicio", puestoSchema);