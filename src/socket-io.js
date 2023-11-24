const controllers = require("./controllers");
// -------

exports.socketIo = (io) => {
    io.on('connection', (socket) => {
        console.log('a user connected');
    });
}
