const mongoose = require("mongoose");

const EmpleadoSchema = mongoose.Schema({
    nombre: {
        type: String,
        trim: true,
        required: true,
    },
    email: {
        type: String,
        trim: true,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true
    },
    perfil: mongoose.Schema({
        experiencia: String,
        description: String,
        foto: String,
    }),
    calificacion: [
        mongoose.Schema({
            uid: {type: mongoose.Schema.Types.ObjectId, ref: "Usuario"},
            value: Number,
        }),
    ],
    cortes: [String]
});

module.exports = mongoose.model("Empleado", EmpleadoSchema);