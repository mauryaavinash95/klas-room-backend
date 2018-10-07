const { Student } = require('../schema/Student');
const { Teacher } = require('../schema/Teacher');
const jwt = require('jsonwebtoken');
const { jwtsecret } = require('../config/config.json');

module.exports.signup =
    async ({ role, name, id, email, password, year, division }) => {
        try {
            let token = jwt.sign({ role, email, name, id, year, division }, jwtsecret);
            let timeCreated = new Date();
            let user;
            if (role === "teacher") {
                user = new Teacher({ email, name, employeeId: id, password, token, timeCreated });
            }
            else {
                user = new Student({ email, name, rollNo: id, password, year, division, token, timeCreated });
            }
            return (await user.save());
        }
        catch (err) {
            throw new Error(err);
        }
    }


module.exports.signin =
    async ({ role, email, password }) => {
        try {
            let user;
            if (role === "teacher") {
                user = await Teacher.findOne({ email, password });
            }
            else {
                user = await Student.findOne({ email, password });
            }
            if (!user) {
                throw new Error("No such user found");
            }
            return user;

        }
        catch (err) {
            throw new Error(err);
        }
    }

