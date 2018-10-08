const Joi = require('joi');

module.exports.createLecture = {
    body: Joi.object({
       
        subId: Joi.number().integer().required(),
        year: Joi.number().integer().required(),
        teacherId: Joi.number().integer().required(),
        division: Joi.string().required().trim()
    }).required()
};

