var mongoose = require('mongoose');

var Channel = mongoose.model('Channel', {
    teacherId: {
        required: true,
        type: String,
        trim: true,
    },
    studentIds: {
        required: true,
        type: Array,
        trim: true,
    },
    assignments: {
        required: true,
        trim: true,
        type: Array,
    }
});

module.exports = {
    Channel,
}