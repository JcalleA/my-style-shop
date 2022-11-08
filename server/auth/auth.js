//credentials
const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
    const bearerHeader = req.headers['authorization']
    try {
        bearerToken = bearerHeader.split(" ")[1];
        req.token = bearerToken;
        jwt.verify(req.token, "__secret__");
        next();
    } catch (error) {
        res.status(401)
        res.json({
            mensaje: "Token invalido"
        });
    }
}

module.exports = auth;