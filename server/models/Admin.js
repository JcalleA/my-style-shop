const mongoose = require("mongoose");

const AdminSchema = mongoose.Schema({
    password: { type: String, require: true },
});

module.exports = mongoose.model("Administrador", AdminSchema);