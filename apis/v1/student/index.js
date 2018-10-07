
const student = require('express').Router();
const expressJoi = require('express-joi-validator');
const validator = require('./validator');
const handler = require('./handler');

// User Signup
student.post('/signup', expressJoi(validator.signup), handler.signup);

// User signin
student.post('/signin', expressJoi(validator.signin), handler.signin);

// User search
// student.get('/search', expressJoi(validator.searchUser), handler.searchUser);

module.exports = student;