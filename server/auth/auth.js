//credentials
const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
    const bearerHeader = req.headers['authorization']
    try {
        bearerToken = bearerHeader.split(" ")[1];
        req.token = bearerToken;
        next();
    } catch (error) {
        res.status(401)
        res.json({
            code: 4,
            msg: "No tiene permiso para acceder"
        });
    }
}

module.exports = auth;