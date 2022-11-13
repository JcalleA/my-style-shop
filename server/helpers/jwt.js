const jwt = require("jsonwebtoken");

const generarToken = (id, nombre) => {
    return new Promise((resolve, reject) => {
        const payload = {id, nombre};
        //firma del token
        jwt.sign(
            payload,
            process.env.FRASE_SECRETA,
            {
                expiresIn: 7200,
            },
            (err, token) => {
                if (err) {
                    console.error(err);
                    reject("No se pudo generar el token");
                }
                resolve(token);
            }
        );
    });
};

module.exports = { generarToken }