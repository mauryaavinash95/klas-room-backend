
const student = require('express').Router();
const expressJoi = require('express-joi-validator');
const validator = require('./validator');
const handler = require('./handler');


// teacher creates a lecture
teacher.post('/subchannel', expressJoi(validator.subChannel), handler.subChannel);

module.exports = student;