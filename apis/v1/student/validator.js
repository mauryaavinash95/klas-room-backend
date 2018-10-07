const Joi = require('joi');

module.exports.signup = {
    body: Joi.object({
        name: Joi.string().required().trim(),
        email: Joi.string().required().trim(),
        password: Joi.string().required().trim(),
        year: Joi.string().required().trim(),
        division: Joi.string().required().trim()
    }).required()
};

module.exports.signin = {
    body: Joi.object({
        email: Joi.string().required().trim(),
        password: Joi.string().required().trim(),
    }).required()
}