const controllers = require("./controllers");
// -------

exports.routes = (app) => {
    app.get('/', controllers.main.index);
}
