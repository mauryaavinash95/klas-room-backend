const { createChannel } = require('../../../models/createChannel');

module.exports.createChannel = async (request, response) => {
    let { subName,  year, division, dept } = request.body;
    try {
        let res = await createChannel({ subName,  year, division, dept });
        delete res.password;
        response.sendJson({ message: "Created successfully", ...res }, 200);
    } catch (err) {
        global.logs.error(err);
        response.sendJson(err.toString(), 404)
    }
};



