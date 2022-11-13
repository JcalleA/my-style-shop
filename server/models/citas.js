const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CitaSchema = new Schema({
    usuario: { 
        type: Schema.ObjectId, 
        ref: "Usuarios", 
        required: true
    },
    observaciones: String,
    estado: {type: String, default: "pendiente"},
    fecha: {
        type: Date,
        required: true
    }
});

module.exports = mongoose.model("Cita", CitaSchema );