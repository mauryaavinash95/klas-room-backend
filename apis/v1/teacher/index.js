
const teacher = require('express').Router();
const expressJoi = require('express-joi-validator');
const validator = require('./validator');
const handler = require('./handler');

// teacher creates a lecture
teacher.post('/createlecture', expressJoi(validator.createLecture), handler.createlecture);

module.exports = teacher;