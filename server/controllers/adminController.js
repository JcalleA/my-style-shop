const { response } = requiere("express");

exports.validaAdmin = (req, res = response) => {
    const { password } = req.body;
    try {
        if (password !== process.env.PAS_AD) {
            return res.status(400).json({
                ok:false,
                msg: "La contraseña es incorrecta",
            });
        }
        res.json({
            ok: true,
            msg: "Admin autorizado",
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            oK: false,
            msg: "Error en el servidor",
        });
    }
};