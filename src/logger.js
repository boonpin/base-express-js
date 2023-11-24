const morgan = require('morgan')
const rfs = require('rotating-file-stream')

const {APP_LOG_DIR, LOG_RETAIN} = require("./config");

const accessLogStream = rfs.createStream('access.log', {
    interval: LOG_RETAIN || '1d',
    path: APP_LOG_DIR
})

const logger = morgan('combined', {stream: accessLogStream});
exports.logger = logger;
