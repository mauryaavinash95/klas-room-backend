var mongoose = require('mongoose');

var Teacher = mongoose.model('Teacher', {
   
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
    employeeId: {
        required: true,
        type: String,
        trim: true,
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
    }
});

module.exports = {
    Teacher,
}