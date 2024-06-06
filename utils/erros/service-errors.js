const { StatusCodes } = require('http-status-codes');

class ServiceError extends Error {
    constructor(
        message,
        explanation,
        statusCodes=StatusCodes.INTERNAL_SERVER_ERROR
        
    ){
        this.name = 'ServiceError';
        this.message = message;
        this.statusCode = statusCode;
        this.explanation = message;
        
    }

}

module.exports= ServiceError;