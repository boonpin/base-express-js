const dotenv = require("dotenv");
const path = require("node:path");

dotenv.config();

const APP_DIR = path.join(__dirname);

const config = {
    APP_DIR,
    APP_STORAGE_DIR: path.join(APP_DIR, 'storage'),
    APP_DATA_DIR: path.join(APP_DIR, 'storage', 'data'),
    APP_TEMP_DIR: path.join(APP_DIR, 'storage', 'temp'),
    APP_LOG_DIR: path.join(APP_DIR, 'storage', 'logs'),

    APP_PORT: process.env.APP_PORT || 3000,
    APP_HOST: process.env.APP_HOST || '127.0.0.1',

    DATABASE_DRIVER: process.env.DATABASE_DRIVER || 'sqlite',
    DATABASE_NAME: process.env.DATABASE_NAME || 'memory',
    DATABASE_HOST: process.env.DATABASE_HOST,
    DATABASE_USERNAME: process.env.DATABASE_USERNAME,
    DATABASE_PASSWORD: process.env.DATABASE_PASSWORD,

    LOG_RETAIN: process.env.LOG_RETAIN || '1d',
}

module.exports = config
