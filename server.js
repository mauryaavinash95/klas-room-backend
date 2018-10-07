#!/usr/bin/env node

// Require Express router
const server = require('./index');
// Load Environment config
const conf = require("./config/dev_conf.json");
// Setup logging
const Logger = require('bunyan');
const log = new Logger({
    name: 'klas-room',
    streams: [{
            level: 'info',
            stream: process.stdout // log INFO and above to stdout
        },
        {
            level: 'error',
            path: '/tmp/klas-toom.log' // log ERROR and above to a file
        }
    ]
});



global.db = {};
global.log = log;
global.conf = conf;


const port = process.env.PORT || conf.port;

const bootServer = () => server.listen(port, conf.ip, function (error) {
    if (error) {
        console.log("Error while starting up server: ", error);
        log.error('Unable to listen for connections', error);
        process.exit(0);
    }
    console.log("Server up & running on: ", conf.ip + ':' + port);
    log.info('Express is listening on http://' + conf.ip + ':' + port);
});

bootServer();