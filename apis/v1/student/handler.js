const { signup } = require('../../../models/signup');

module.exports.signup = async (request, response) => {
    let { name, email, password, year, division } = request.body;
    try {
        let res = await signup({ name, email, password, year, division });
        delete res.password;
        response.sendJson({ message: "Created successfully", ...res }, 200);
    } catch (err) {
        global.logs.error(err);
        response.sendJson(err.toString(), 404)
    }
};

module.exports.signin = (request, response) => {
    let { email, password } = request.body;
    response.sendJson({
        role,
        username,
        password
    }, 200)
    /* if (role && username && password) {
    	signin(role, username, password)
    		.then((resolve) => {
    			let { role, token } = resolve;
    			response.sendJson({ username, role, token }, 200)
    		})
    		.catch((err) => {
    			response.sendJson(err.toString(), 404)
    		})
    } else {
    	response.sendJson("role, username, email and password are required", 404);
    } */
};

