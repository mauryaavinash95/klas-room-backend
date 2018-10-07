module.exports.signup = (request, response) => {
    let {
        role,
        username,
        email,
        password
    } = request.body;
    response.sendJson({
        role,
        username,
        password
    }, 200)
    /* if (role && username && email && password) {
    	signup(role, username, email, password)
    		.then((resolve) => {
    			let { role, token } = resolve;
    			response.sendJson({ username, role, token }, 200);
    		})
    		.catch((err) => {
    			response.sendJson(err.toString(), 404)
    		})
    } else {
    	response.sendJson("role, username, email and password are required", 404);
    } */
};

module.exports.signin = (request, response) => {
    let {
        role,
        username,
        password
    } = request.body;
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

