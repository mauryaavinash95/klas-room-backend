const Joi = require('joi');

module.exports.signup = {
    body: Joi.object({
        role: Joi.string().required().allow("teacher", "student"),
        name: Joi.string().required().trim(),
        email: Joi.string().required().trim(),
        id: Joi.string().required().trim(),
        password: Joi.string().required().trim(),
        year: Joi.string().trim(),
        division: Joi.string().trim()
    }).required()
};

module.exports.signin = {
    body: Joi.object({
        role: Joi.string().required().allow("teacher", "student"),
        email: Joi.string().required().trim(),
        password: Joi.string().required().trim(),
    }).required()
}