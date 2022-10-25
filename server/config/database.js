const { default: mongoose } = require('mongoose');
const moongose = require('mongoose');

const host = "localhost";
const port = "27017";
const database = "style-shop";

exports.mongoConnect = () => {
    const mongoConnection = `mongodb://${host}:${port}/${database}`;
    mongoose.connect(mongoConnection, {
       useNewUrlParser: true,
       useUnifiedTopology: true 
    });
    mongoose.Promise = global.Promise;
    const dbConnection = mongoose.connection;
    console.warn("Conexion exitosa")
    dbConnection.on("error", console.error.bind(console, 'Mongodb connetion error'));
}