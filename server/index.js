
//const mongoose = require("mongoose");
const createError = require('http-errors');
const express = require("express");
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require("cors");

// database 
const database = require('./config/database');
// routers
const usuariosRouter = require('./routes/usuario.router');

//mongo connection
database.mongoConnect();
// authorization
const auth = require('./auth/auth.js');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

//router 
app.use('/users', usuariosRouter);
//access a users not for other routers because need authentication with token in the client web.
// app.use(auth);


//cath 404 and forward to error handler
app.use((req, res, next) => {
    next(createError(404));
});

//eror handler
app.use((err, req, res,) => {
    res.locals.message = err.message;
    res.locals.error = req.app.get('env' === 'develoment' ? err: {});

    // render the error page
    const CODE = 500
    res.status(err.status || CODE);
    res.render('error');
}); 

module.exports = app;


// BD Conection
//const url = "mongodb://localhost:27017/mydb";
//mongoose
//    .connect(url)
//    .then(console.log("conectado a la bd"))
//    .catch((error) => console.error(error));


//controller
/*app.get('/:id',getUser)
app.post('/registrar',registrar)
app.post('/login',login)*/

//const Usuarios = require("./models/usuarios");

// app.get("/login", (req, res) => {
//     Usuarios
//     .find(req)
//     .then(allUsuarios => res.json(allUsuarios));
// });


/*app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto: ${PORT}`);
});*/

