const { Student } = require('../schema/Student');
const { Channel } = require('../schema/Channel')
const { Teacher } = require('../schema/Teacher')
const shortid = require('shortid');

module.exports.createChannel =
    async ({ subName,  year, division, dept}) => {
        try {
           
            let teacher = new Teacher({ subName,  year, division, dept });
            let channel= new Channel({ teacherId,studentIds,channelIds });
            channel.save()
            return (await teacher.save())
        }
        catch (err) {
            return err;
        }
    };