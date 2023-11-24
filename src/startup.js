const express = require("express");
const {APP_PORT, APP_HOST} = require('./config');
const {routes} = require('./routes');
const {socketIo} = require('./socket-io');
const {Server} = require("socket.io");
const {logger} = require('./logger');

// http: expressjs
const app = express()
const port = APP_PORT;

const http = require('node:http');
const server = http.createServer(app);

routes(app);
app.use(logger);
app.route('/').get((req, res) => {
    res.send('Get a random book')
})

// websocket: socket.io
const io = new Server(server);
socketIo(io);

// startup
server.listen(port, APP_HOST, () => {
    console.log(`started app on ${APP_HOST}:${APP_PORT}`);
});

module.exports = {app, io, server}
