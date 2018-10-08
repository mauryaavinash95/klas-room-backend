const { Lecture } = require('../schema/Lecture')

module.exports.createLecture =
    async ({ id, subName, year, division, teacherId }) => {
        try {
            let lecture = new Lecture({ id, subName, year, division, teacherId });
            return (await lecture.save())
        }
        catch (err) {
            return err;
        }
    };