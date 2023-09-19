const { constants } = require('../constants/constants');
const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500;
    switch (statusCode) {
        case constants.NOT_FOUND:
            res.json({
                title: 'Not Found',
                message: err.message,
                stackTrace: err.stack,
                status: statusCode
            });
            break;
        case constants.BAD_REQUEST:
            res.json({
                title: 'Validation Failed',
                message: err.message,
                stackTrace: err.stack,
                status: statusCode
            });
            break;
        case constants.UNAUTHORIZED:
            res.json({
                title: 'Unauthorized',
                message: err.message,
                stackTrace: err.stack,
                status: statusCode
            });
            break;
        case constants.FORBIDDEN:
            res.json({
                title: 'Forbidden',
                message: err.message,
                stackTrace: err.stack,
                status: statusCode
            });
            break;
        case constants.SERVER_ERROR:
            res.json({
                title: 'Internal Server Error',
                message: err.message,
                stackTrace: err.stack,
                status: statusCode
            });
            break;
        default:
            console.log(err.message);
            break;
    }


}
module.exports = errorHandler;