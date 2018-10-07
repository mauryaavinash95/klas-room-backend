
const router = require('express').Router();
const expressJoi = require('express-joi-validator');
const validator = require('./validator');
const handler = require('./handler');

// User Signup
router.post('/signup', expressJoi(validator.signup), handler.signup);

// User signin
router.post('/signin', expressJoi(validator.signin), handler.signin);

// User search
// router.get('/search', expressJoi(validator.searchUser), handler.searchUser);

module.exports = { router }