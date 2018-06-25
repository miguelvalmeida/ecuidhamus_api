const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        const decoded = jwt.verify(token, process.env.JWT_KEY);
        req.userData = decoded;
        if (decoded.profile === 2) {
            next();
        } else {
            res.status(400).json({
                message: 'Sem permissão'
            })
        }
    } catch (error) {
        return res.status(400).json({
            message: 'Erro!'
        });
    }
};