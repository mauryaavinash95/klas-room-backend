const { Student } = require('../schema/Student');
const jwt = require('jsonwebtoken');
const shortid = require('shortid');
const { jwtsecret } = require('../config/config.json');

module.exports.signup =
    async ({ name, email, password, year, division }) => {
        try {
            let lectureIds = [];
            let token = jwt.sign({ email, name, year, division, lectureIds }, jwtsecret);
            let timeCreated = new Date();
            let s = new Student({ email, name, password, year, division, token, timeCreated, lectureIds });
            return (await s.save())
        }
        catch (err) {
            return err;
        }
    };