const mongoose = require('mongoose');

function dbInit(configPath) {
    const mongoAuth = configPath ? require(configPath) : null;
    return new Promise((resolve, reject) => {
        mongoose.Promise = global.Promise;
        let mongoRoute = "mongodb://localhost:27017";
        if (mongoAuth.username && mongoAuth.password) {
            mongoRoute = "mongodb://" + mongoAuth.username + ":" + mongoAuth.password + "@" + mongoAuth.url
        }

        mongoose.connect(mongoRoute)
            .then((res) => {
                resolve("Connection with MongoDB server successful");
            })
            .catch((err) => {
                console.log("Error caught: ", err);
                reject(err);
            });
    })
}

module.exports = {
    dbInit,
    mongoose
}