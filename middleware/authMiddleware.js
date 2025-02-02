const jwt = require('jsonwebtoken');
const { findOne } = require('../config/PrimsmaClient');
const clientResponse = require('../config/clientResponse');


const authMiddleware = async (req, res, next) => {
    const token = req.header('Authorization');
    if (!token) {
        return res.status(401).send({ error: 'No token provided' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await findOne(decoded.id, decoded.id);
        if(!user) {
            return res.status(401).send({ error: 'Invalid token' });
        }

        req.user = decoded;
        next();
    } catch (error) {
        clientResponse.sendUnauthorizedResponse(res, 'Invalid token');
    }
};

module.exports = authMiddleware;

