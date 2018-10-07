const User = require('../schema/User');
const jwt = require('json-web-token');
const shortid = require('shortid');
const {
    jwtsecret
} = require('../config/config.json');

module.exports.signup =
    ({ name, email, password }) => {
        token = jwt.sign({ role, email, name }, jwtsecret)
        let u = new User({
            name,
            email,
            password,
            token
        })
    };