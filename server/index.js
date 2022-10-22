
const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const PORT = process.env.PORT || 3001;
const app = express();
const getUser = require("./controllers/getUser");
const registrar = require("./controllers/registrar");
const login = require("./controllers/login");

app.use(cors());
app.use(express.json());
// BD Conection
const url = "mongodb://localhost:27017/mydb";
mongoose
    .connect(url)
    .then(console.log("conectado a la bd"))
    .catch((error) => console.error(error));



app.get('/:id',getUser)
app.post('/registrar',registrar)
app.post('/login',login)

const Usuarios = require("./models/usuarios");

// app.get("/login", (req, res) => {
//     Usuarios
//     .find(req)
//     .then(allUsuarios => res.json(allUsuarios));
// });


app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto: ${PORT}`);
});

