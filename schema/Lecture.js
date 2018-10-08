var mongoose = require('mongoose');

var Lecture = mongoose.model('Lecture', {
   
    subId: {
        required: true,
        type: Number,
        trim: true
    },
    year: {
        required: true,
        type: Number,
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