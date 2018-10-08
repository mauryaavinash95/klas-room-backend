const { createLecture } = require('../../../models/createLecture.js');

//create a lecture and channel and returns channelId
module.exports.createlecture = async (request, response) => {
    let { subId, year, division, teacherId } = request.body;
    try {
        let res = await createLecture({ subId, year, division, teacherId });
        console.log(res,"res :")
        response.sendJson({ id: res["_doc"]["_id"], message: "Created Lecture and Channel successfully" }, 200);
    } catch (err) {
        response.sendJson(err.toString(), 404)
    }
};



