const v1Router = require('express').Router();

const student = require('./student/index');

v1Router.use('/student', student);

module.exports = v1Router;
