const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const {
    router
} = require('./apis/v1/index.js');

let app = new express();
app.use(cors());

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

var server = require('http').Server(app);
var io = require('socket.io')(server);
app.io = io;

app.use("/", (request, response, next) => {
    request.io = io;
    response.sendJson = (data, code) => {
        response.send({
            data,
            code
        })
    }
    next();
})

io.on('connection', (socket) => {
    console.log("New user connected");
    socket.on('join', (params, callback) => {
        let {
            username,
            token,
            groupId
        } = params;
        // console.log("Params are: ", params);
        validateUser(groupId, username, token)
            .then((res) => {
                console.log("User validated successfully: ", res);
                socket.join("abc");
                io.sockets.in("abc").emit('update', `${groupId} connected, from update listener`);
            })
            .catch((err) => {
                console.log("Error:  ", err);
            })
    });
});


app.use('/apis/v1/', router);

/* app.use(function (req, res) {
    if (!res.locals.result)
        res.status(404).json('Page not found');
    else {
        res.send({
            code: 200,
            result: res.locals.result,
        });
    }
})

app.use(function (err, req, res, next) {
    err = err.message || err.msg || err;
    if (err.isBoom) {
        return res.status(err.output.statusCode).json(err.output.payload);
    } else {
        res.status(200).send({
            code: err.statusCode || 400,
            result: err,
        });
    }
}); */

module.exports = server;