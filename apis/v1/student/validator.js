const Joi = require('joi');

module.exports.subChannel = {
    body: Joi.object({
        studentId: Joi.number().integer().required(),
        channelId: Joi.number().integer().required()
    }).required()
};

