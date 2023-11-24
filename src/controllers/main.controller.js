const {SettingRepo} = require("../database/entities/settings");
module.exports = {
    index: async (req, res) => {

        res.send(await SettingRepo.gets(['test']));
    }
}
