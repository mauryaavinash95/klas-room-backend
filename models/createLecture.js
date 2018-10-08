const { Lecture } = require('../schema/Lecture')
const { Channel} =require('../schema/Channel')
//create a lecture and after that create channel for d same
module.exports.createLecture =
    async ({ subId, year, division, teacherId }) => {
        try {
            let lecture = new Lecture({ subId, year, division, teacherId });
            let studentIds=[]
            let assignments=[]
            let channel=new Channel({teacherId,studentIds,assignments}); //Initial after lecture creation studentIds and assi will be 0
            return (await lecture.save(),await channel.save()) //To be tested 
        }
        catch (err) {
            console.log("error in saving DB : ", err)
            return err;
        }
    };