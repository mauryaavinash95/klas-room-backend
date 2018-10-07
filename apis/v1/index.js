const v1Router = require('express').Router();

const login = require('./login/index');

v1Router.use('/login', login);

module.exports = v1Router;
