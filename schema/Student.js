var mongoose = require('mongoose');

var Student = mongoose.model('User', {
    name: {
        required: true,
        type: String,
        trim: true,
        index: {
            unique: true
        },
    },
    email: {
        required: true,
        type: String,
        trim: true,
        index: {
            unique: true
        },
    },
    password: {
        required: true,
        type: String,
        trim: true,
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
    lectureIds: {
        type: Array,
        default: []
    },
    token: {
        required: true,
        type: String,
        trim: true,
    },
    timeCreated: {
        required: true,
        trim: true,
        type: Date,
        default: new Date()
    }
});

module.exports = {
    Student
}