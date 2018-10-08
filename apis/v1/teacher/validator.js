const Joi = require('joi');

module.exports.createLecture = {
    body: Joi.object({
        id: Joi.number().required().trim(),
        subName: Joi.string().required().trim(),
        year: Joi.string().required().trim(),
        teacherId: Joi.number().required().trim(),
        division: Joi.string().required().trim()
    }).required()
};

