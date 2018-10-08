
const teacher = require('express').Router();
const expressJoi = require('express-joi-validator');
const validator = require('./validator');
const handler = require('./handler');

// teacher creates a channel
teacher.post('/createChannel', expressJoi(validator.createChannel), handler.createChannel);
teacher.post('/createLecture', expressJoi(validator.createLecture), handler.createLecture);


module.exports = teacher;