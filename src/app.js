const express = require("express");
const {APP_PORT, APP_HOST} = require("./config");
const dayjs = require("dayjs");
const {SettingRepo} = require("./database/entities/settings");

const app = express()
const port = APP_PORT

app.get('/', async (req, res) => {

    //await SettingRepo.set('test', dayjs().toISOString());

    res.send(await SettingRepo.gets(['test', 'test2']));
})

app.listen(port, APP_HOST, () => {
    console.log(`start app on ${APP_HOST}:${port}`)
})

module.exports = {app}
