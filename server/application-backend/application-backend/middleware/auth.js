const jwt = require('jsonwebtoken');
const privateKey = '2Co0l4SchoOl';

module.exports = (req, res, next) => {
    try {
        const token = req.header('Authorization');
        if (!token) return res.status(403).send('token not provided');
        req.decoded = jwt.verify(token.replace('Bearer ', ''), privateKey);
        return next();

    }
    catch(ex) {
        res.status(403).send('Invalid token');
    }
}