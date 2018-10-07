const { signup, signin } = require('../../../models/login');

module.exports.signup = async (request, response) => {
    let { role, name, id, email, password, year, division } = request.body;
    try {
        let res = await signup({ role, name, id, email, password, year, division });
        res = res["_doc"];
        delete res.password;
        response.sendJson({ message: "Created successfully", ...res }, 200);
    } catch (err) {
        global.log.error(err);
        response.sendJson(err.toString(), 404)
    }
};

module.exports.signin = async (request, response) => {
    let { role, email, password } = request.body;
    try {
        let res = await signin({ role, email, password });
        res = res["_doc"];
        delete res.password;
        response.sendJson(res, 200);
    }
    catch (err) {
        global.log.error(err);
        response.sendJson(err.toString(), 404)
    }
};

