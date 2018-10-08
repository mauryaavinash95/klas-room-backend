const { createChannel } = require('../../../models/createChannel');
const { createLecture } = require('../../../models/createLecture');


module.exports.createChannel = async (request, response) => {
    //TODO
    let { subName, year, division, dept } = request.body;
    try {
        let res = await createChannel({ subName, year, division, dept });
        delete res.password;
        response.sendJson({ message: "Created successfully", ...res }, 200);
    } catch (err) {
        global.logs.error(err);
        response.sendJson(err.toString(), 404)
    }
};

module.exports.createLecture = async (request, response) => {
    let { id, subName, year, division, teacherId } = request.body;
    try {
        let res = await createLecture({ id, subName, year, division, teacherId });
        delete res.password;
        response.sendJson({ message: "Created Lecture successfully", ...res }, 200);
    } catch (err) {
        global.logs.error(err);
        response.sendJson(err.toString(), 404)
    }
};



