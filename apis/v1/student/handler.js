const { subChannel } = require('../../../models/subChannel.js');
//create a lecture and channel and returns channelId
module.exports.subChannel = async (request, response) => {
    let {  studentId,channelId } = request.body;
    try {
        let res = await subChannel({ studentId,channelId });
        console.log(res,"res :")
        response.sendJson({ message: "Created Lecture and Channel successfully" }, 200);
    } catch (err) {
        response.sendJson(err.toString(), 404)
    }
};



