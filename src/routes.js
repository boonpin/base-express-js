const {app} = require('./app');
const controllers = require("./controllers");
// -------

app.get('/', controllers.main.index);
