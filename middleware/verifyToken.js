const { createError } = require('../utils/error');
const jwt = require('jsonwebtoken');

export const verifyToken = async (req, res, next) => {
    const token = req.headers.AuthToken;
    if(!token){
        return next(createError(401, 'you are not authenticated'));
    }

    jwt.verify(token, process.env.JWT, (err, user) => {
        if(err) return next(createError(403, 'Token is invalid'));
        req.user = user;
        next();
    })
}

export const verifyUser = (res, req ,next) => {
    verifyToken(req, res, next, () => {
        if(req.user.id === req.params.id || req.user.isAdmin){
            next();
        }else{
            next(createError(403, 'You are not authorized'));
        }
        
    });
}

export const verifyAdmin = (res, req, next) => {
    verifyToken(req, res, next, () => {
        if(req.user.isAdmin){
            next();
        }else{
            next(createError(403, 'You are not authorized'));
        }
    }
    );
}