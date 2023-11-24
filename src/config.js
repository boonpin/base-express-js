const dotenv = require("dotenv");
dotenv.config();

const config = {
    APP_PORT: process.env.APP_PORT || 3000,
    APP_HOST: process.env.APP_HOST || '127.0.0.1',

    DATABASE_DRIVER: process.env.DATABASE_DRIVER || 'sqlite',
    DATABASE_NAME: process.env.DATABASE_NAME || 'memory',
    DATABASE_HOST: process.env.DATABASE_HOST,
    DATABASE_USERNAME: process.env.DATABASE_USERNAME,
    DATABASE_PASSWORD: process.env.DATABASE_PASSWORD
}

module.exports = config
