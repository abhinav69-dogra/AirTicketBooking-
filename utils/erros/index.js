const { ValidationError } = require("sequelize");
const AppError = require("./app-error");
const ServiceError = require("./service-errors");

module.exports ={
    ValidationError: require('./validation-error'),
    AppError : require('./app-error'),
    ServiceError : require('./service-error')
}