const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const puestoSchema = new Schema({
    numero: Number,
    trabajador: { type: Schema.ObjectId, ref: "Usuarios" },
    reservas:{type: Schema.ObjectId, ref: "Reservas"}
});

module.exports = mongoose.model("Servicio", puestoSchema);