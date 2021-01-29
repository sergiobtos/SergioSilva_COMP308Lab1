module.exports = function (app) {

    var index = require("../controllers/index.server.controller");
    var login = require("../controllers/login.server.controller");
    var display = require("../controllers/display.server.controller");
    var thanks = require("../controllers/thankyou.server.controller");
  
    app.get("/", index.render);
    app.post("/",login.render);
    app.get("/display", display.render);
    app.post("/display", (req, res) => {
        thanks.render(req, res);
    });
    app.get("/thanks", thanks.render);
};