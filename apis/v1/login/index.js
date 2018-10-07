
const login = require('express').Router();
const expressJoi = require('express-joi-validator');
const validator = require('./validator');
const handler = require('./handler');

// User Signup
login.post('/signup', expressJoi(validator.signup), handler.signup);

// User signin
login.post('/signin', expressJoi(validator.signin), handler.signin);

// User search
// login.get('/search', expressJoi(validator.searchUser), handler.searchUser);

module.exports = login;