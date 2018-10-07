const Joi = require('joi');

module.exports.createChannel = {
    body: Joi.object({
        subName: Joi.string().required().trim(),
        year: Joi.string().required().trim(),
        dept: Joi.string().required().trim(),
        division: Joi.string().required().trim()
    }).required()
};

