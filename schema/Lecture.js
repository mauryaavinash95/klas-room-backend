var mongoose = require('mongoose');

var Lecture = mongoose.model('Lecture', {
    id: {
        required: true,
        type: String,
        trim: true,
        index: {
            unique: true
        },
    },
    SubName: {
        required: true,
        type: String,
        trim: true
    },
    year: {
        required: true,
        type: String,
        trim: true,
    },
    division: {
        required: true,
        type: String,
        trim: true,
    },
    teacherId: {
        required: true,
        type: Number
    },

});

module.exports = {
    Lecture
}