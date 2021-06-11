
const jwt = require('jsonwebtoken');
const response = require('./apiResponse');
const config = require('../config/appconfig');
module.exports =
{
    AuthenticateToken: (req, res, next) => {
        try {
            if (!req?.headers?.authorization)
                return response.UnauthorizedResponse(res, 'Not Authorized to access this resource!');
            let Bearer = req.headers.authorization.split(' ')[0];

            if (!Bearer || Bearer !== 'Bearer')
                return response.UnauthorizedResponse(res, 'Not Authorized to access this resource!');

            let token = req.headers.authorization.split(' ')[1];
            if (!token)
                return response.UnauthorizedResponse(res, 'Not Authorized to access this resource!');

            jwt.verify(token, config.auth.jwt_secret, (err, decoded) => {
                if (err) {
                    return response.UnauthorizedResponse(res, 'please provide a vaid token ,your token might be expired');
                }
                req.decoded = decoded;
                next();
            });
        }
        catch (err) {
            return response.ErrorResponse(res, err);
        }
    }
}
 