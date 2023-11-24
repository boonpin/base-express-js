const {sequelize} = require("./src/database")
const run = async () => {
    console.log(`syncing database ....`);
    await sequelize.sync();
}
(async () => await run())();
