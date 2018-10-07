var mongoose = require('mongoose');

var User = mongoose.model('User', {
    role: {
        required: true,
        type: String,
        trim: true,
    },
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
    User,
}