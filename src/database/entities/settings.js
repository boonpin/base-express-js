const {Model, DataTypes} = require('sequelize');
const {sequelize} = require("../index");

class Settings extends Model {
}

Settings.init({
    key: {
        type: DataTypes.STRING,
        unique: true,
        primaryKey: true,
    },
    value: {
        type: DataTypes.STRING,
        allowNull: true,
    },
}, {sequelize, modelName: 'user'});


const SettingRepo = {
    set: async (key, value) => {
        const s = await Settings.findOne({where: {key}});
        if (!s) {
            await Settings.create({key, value});
        } else {
            await s.update({value});
        }
    },
    get: async (key, fallback = undefined) => {
        const s = await Settings.findOne({where: {key}});
        if (s) {
            return s.value;
        }
        return fallback;
    },
    gets: async (keys) => {
        const data = {};
        for (const k of keys) {
            data[k] = await SettingRepo.get(k);
        }
        return data;
    }
}
module.exports = {Settings, SettingRepo};
