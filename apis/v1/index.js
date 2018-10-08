const v1Router = require('express').Router();

const login = require('./login/index');
const lecture= require('./teacher/index')

v1Router.use('/login', login);
v1Router.use('/teacher',lecture);

module.exports = v1Router;
