const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reservaSchema = new Schema({
    hora: {type: Date, required: false},
    usuario: { type: Schema.ObjectId, ref: "Usuarios" },
});

module.exports = mongoose.model("Servicio", reservaSchema );