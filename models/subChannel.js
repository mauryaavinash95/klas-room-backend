const { Lecture } = require('../schema/Lecture')
const { Channel} =require('../schema/Channel')
//subscribes single user to single channel
module.exports.subChannel =
    async ({  studentId,channelId }) => {
        try {
            //TODO
            let channel=Channel.find({_id:channelId})
            return (await channel.save()) 
        }
        catch (err) {
            console.log("error in saving DB : ", err)
            return err;
        }
    };