const Joi = require('joi');

module.exports.signup = {
    body: Joi.object({
        role: Joi.string().required().trim(),
        name: Joi.string().required().trim(),
        email: Joi.string().required().trim(),
        password: Joi.string().required().trim()
    }).required()
};

module.exports.signin = {
    body: Joi.object({
        role: Joi.string().required().trim(),
        email: Joi.string().required().trim(),
        password: Joi.string().required().trim(),
    }).required()
}