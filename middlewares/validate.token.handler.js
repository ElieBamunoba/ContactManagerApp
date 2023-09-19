const asyncHandler = require('express-async-handler');
const jwt = require('jsonwebtoken');


const validateToken = asyncHandler(async (req, res, next) => {
    let token;
    let authorization = req.headers.Authorization || req.headers.authorization;
    if (authorization && authorization.startsWith('Bearer')) {

        token = authorization.split(' ')[1];
        jwt.verify(token, process.env.JWT_SECRET,
            (err, decoded) => {
                if (err) {
                    res.status(401);
                    throw new Error('Not authorized, token failed');
                    return;
                }
                if (decoded.user !== undefined) {
                    req.user = decoded.user;
                    next();
                } else {
                    req.user = decoded;
                    next();
                }
            });
        if (!token) {
            res.status(401);
            throw new Error('Not authorized, no token');
        }
    }
}
);

module.exports = validateToken;