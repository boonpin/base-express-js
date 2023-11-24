const {Sequelize} = require('sequelize');
const {DATABASE_DRIVER, DATABASE_HOST, DATABASE_NAME, DATABASE_PASSWORD, DATABASE_USERNAME} = require("../config");


const sequelize = new Sequelize({
    dialect: DATABASE_DRIVER,
    storage: DATABASE_DRIVER === 'sqlite' ? DATABASE_NAME : undefined,
    host: DATABASE_DRIVER !== 'sqlite' ? DATABASE_HOST : undefined,
    username: DATABASE_USERNAME,
    password: DATABASE_PASSWORD
});

sequelize.sync().then();

module.exports = {sequelize};

