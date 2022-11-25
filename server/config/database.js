const mongoose = require('mongoose');

// const host = "localhost";
// const port = "27017";
// const database = "style-shop";

exports.mongoConnect = () => {
    // const mongoConnection = `mongodb://${host}:${port}/${database}`;
    const mongoConnection = "mongodb+srv://Jhonk1413:ATPYH9qs-TqrS4X@cluster0.5cxeej3.mongodb.net/style_shop"
    mongoose.connect(mongoConnection, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    mongoose.Promise = global.Promise;
    const dbConnection = mongoose.connection;
    console.warn("Conexion exitosa")
    dbConnection.on("error", console.error.bind(console, 'Mongodb connetion error'));
}